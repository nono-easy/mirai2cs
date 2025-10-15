# Repository audit summary

This note captures the currently known issues in the `mirai2cs` project and the quick wins that would make them easier to address.

## Snapshot

| Area | Impact | Suggested next step |
| --- | --- | --- |
| Static asset references | 404s for Open Graph and favicon assets, lowering perceived quality and SEO signals | Either add the missing files or remove the hard-coded paths in `main.ts`/`head.ts` until assets exist |
| Navigation affordances | Users are directed to non-existent pages, effectively breaking prominent CTAs | Audit the action buttons and router table to align their paths or gate unfinished links behind feature flags |
| Sitemap metadata | Search engines crawl `/computer-science`, which the router does not serve | Update `routes.meta.ts` (and the generated `sitemap.xml`) to use `/cs`, or expose a canonical `/computer-science` alias |
| Timer lifecycle | Orphaned intervals continue mutating state after unmount | Store the interval handle in `History.vue` and clear it in `onUnmounted()` |

## Additional details

### Broken references to static assets

* `src/app/main.ts` always falls back to `/og/default-og.png` for the Open Graph image, but the `public` directory does not contain an `og/` folder or the referenced PNG, so every page emits a 404 request for the default social image.
* `src/app/head.ts` configures `/og-image.png`, `/favicon.png`, and `/apple-touch-icon.png`, none of which exist in `frontend/public`. These broken links hurt SEO and clutter logs with 404 noise.

**Nice-to-have refinement:** Instead of deleting the references, consider adding small placeholder assets that can be replaced later. That keeps the markup stable while eliminating needless 404s.

### Navigation targets that do not exist

* The home page advertises many actions (e.g. `/sorry`) that are not registered in the router. Users clicking them land on the 404 page.
* `views/entertainment/Test.vue` links to routes such as `/cs/frontend`, `/cs/java`, `/cs/devops`, `/neuro`, `/roadmap`, `/posts`, and `/media`, none of which are declared in `src/app/router.ts`. These also result in 404s.

**Nice-to-have refinement:** Even before the real pages ship, consider routing these entries to a shared "Coming soon" view. That keeps analytics funnels intact and provides clearer messaging than a 404.

### Sitemap metadata is inconsistent with the router

* The sitemap metadata (`src/router/routes.meta.ts`) publishes `/computer-science`, but the router serves the section at `/cs`. The generated `public/sitemap.xml` therefore points search engines to a non-existent URL.

**Nice-to-have refinement:** Add a check in the sitemap build script to flag paths that do not exist in the router during CI. That would prevent future regressions once the current issue is resolved.

### Timer lifecycle management issues

* `views/core/History.vue` starts a `setInterval` without storing the handle or clearing it when the component unmounts. Navigating away repeatedly will leak timers and keep updating state on destroyed components.

**Nice-to-have refinement:** Wrap the interval logic in a composable that handles registration/cleanup automatically, so other views can reuse a safe pattern.

