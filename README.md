# macadish.com

Pizza from a home kitchen in Singapore. Built with [Astro](https://astro.build),
deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build locally
```

## Structure

- `src/data/` — hero slides, menu, style comparison. Edit these, not the components.
- `src/content/journal/` — journal entries as `.mdx`. Frontmatter drives the spec table.
- `src/components/mdx/` — components usable inside any journal entry.
- `src/assets/hero/` — hero photography. Astro optimises these at build time.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. The custom domain is set by `public/CNAME`.
