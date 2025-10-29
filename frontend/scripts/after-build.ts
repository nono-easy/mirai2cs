/* eslint-disable no-undef */
/* eslint-env node */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface CopyRobotsOptions {
  isPreview: boolean;
  dist: string;
  publicDir: string;
}

function copyRobots(options: CopyRobotsOptions) {
  const { isPreview, dist, publicDir } = options;
  const from = path.join(publicDir, isPreview ? 'robots.dev.txt' : 'robots.txt');
  const to = path.join(dist, 'robots.txt');

  fs.mkdirSync(dist, { recursive: true });
  fs.copyFileSync(from, to);
  console.log('[robots]', isPreview ? 'Disallow (preview)' : 'Allow (prod)');
}

const dist = path.join(__dirname, '..', 'dist');
const isPreview = process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== 'main';
const publicDir = path.join(__dirname, '..', 'public');

copyRobots({ isPreview, dist, publicDir });
