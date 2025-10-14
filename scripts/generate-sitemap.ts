// @ts-nocheck
import { writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
// noinspection ES6PreferShortImport
import { publicRoutes } from "../frontend/src/router/routes.meta";

const SITE_URL = (process.env.SITE_URL || "https://mirai2cs.com").replace(/\/+$/, "");

function today() {
  return new Date().toISOString().slice(0, 10);
}

function buildSitemapXml() {
  console.log("publicRoutes:", publicRoutes);

  const items = publicRoutes
    .filter(r => !(r as any).noindex)
    .map(r => {
      const loc = `${SITE_URL}${r.path.startsWith("/") ? r.path : `/${r.path}`}`;
      const lastmod = (r as any).lastmod || today();
      const changefreq = (r as any).changefreq || (r.path === "/" ? "daily" : "weekly");
      const priority = (r as any).priority ?? (r.path === "/" ? 1.0 : 0.7);

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    items,
    `</urlset>`,
    ``,
  ].join("\n");
}

function buildRobotsTxt() {
  return [
    `User-agent: *`,
    `Allow: /`,
    ``,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    ``,
  ].join("\n");
}

async function main() {
  const publicDir = resolve("frontend/public");
  await mkdir(publicDir, { recursive: true });
  await writeFile(resolve(publicDir, "sitemap.xml"), buildSitemapXml(), "utf8");
  await writeFile(resolve(publicDir, "robots.txt"), buildRobotsTxt(), "utf8");

  console.log("✅ Generated frontend/dist/sitemap.xml & robots.txt");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
