# DCR Car Rental — Next.js

Discount Car Rental marketing site for Ajman, UAE. Built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS v4**, ready to deploy on [Vercel](https://vercel.com).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|----------|---------|
| `BUILT_IN_FORGE_API_URL` | Storage API base URL for vehicle/hero images |
| `BUILT_IN_FORGE_API_KEY` | Storage API key |

Vehicle and hero images are bundled in `public/images/` (downloaded from the original Manus project storage). The `/api/manus-storage` proxy is optional if you add new assets via Forge.

## Push to GitHub (portal login, no manual token)

```powershell
cd dcr-app
.\push-to-github.ps1
```

Uses `gh auth login` **without** `-w` (avoids browser 404). When prompted:

1. Copy the 8-character code from the terminal
2. Open https://github.com/login/device
3. Paste the code and sign in (Google on GitHub is fine)

Then the script creates `Ya7ya-digital/dcr-car-rental` and pushes.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repo in Vercel (framework preset: **Next.js**).
3. Add the environment variables above in Project Settings → Environment Variables.
4. Deploy.

## Project structure

- `src/app/` — App Router pages and API routes
- `src/components/` — UI sections (Hero, Fleet, Booking, etc.)
- `src/shared/` — Shared constants and car data
- `src/app/api/manus-storage/` — Image proxy (replaces Vite `manus-storage` middleware)
