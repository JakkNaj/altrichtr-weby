# HC Říčany — Astro demo

Static Astro homepage demo with local, typed content collections and a Decap CMS-ready editing surface.

## Run locally

```bash
npm install
npm run dev
```

Start the website and Decap proxy together:

```bash
npm run cms:dev
```

## Deployment

`npm run build` creates the static `dist/` folder. Upload that folder to any standard web server (Active24 or AWS-hosted server) through the preferred SFTP/SSH/CI workflow.

Open `http://localhost:4321/admin/`. The combined command stops both processes when you press `Ctrl+C` and stops the remaining process if either one fails. The Decap proxy runs on port `8081`.

If port `8081` is occupied, inspect it with `lsof -nP -iTCP:8081 -sTCP:LISTEN`, then stop the reported PID with `kill <PID>` (use `kill -9 <PID>` only if the normal signal is ignored).

The included Decap setup is deliberately local-only. The editor is bundled by Astro and does not depend on a third-party CDN. Before public CMS editing is enabled, deploy a secure OAuth authentication proxy and configure a real Git provider backend; never expose a write-capable CMS without that authentication layer.

## Branding hand-off

Replace `src/assets/brand/rink-hero.png` with the approved hockey photograph and replace the CSS crest in `src/components/layout/Header.astro` with the official HC Říčany logo when it is supplied. Mock article/team images live under `public/uploads/` and should be replaced before publishing.
