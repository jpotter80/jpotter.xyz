# jpotter.xyz

This is my personal website built with [Observable Framework](https://observablehq.com/framework). It showcases my work as a data developer and includes interactive weather visualizations.

## Project Overview

The site consists of:
- Home page with my bio and technical stack
- Real-time weather dashboard for Black Mountain, NC
- Gallery of my data projects
- Visualization journal

## Development

To start the local preview server:

```bash
npm run dev
```

Then visit http://localhost:3000 to preview the site.

## Project Structure

```ini
.
├─ src
│  ├─ data
│  │  ├─ weather.csv          # historical weather data
│  │  └─ forecast.json        # NWS API weather forecast
│  ├─ index.md               # home page
│  ├─ my-weather.md          # weather dashboard
│  ├─ viz-journal.md         # visualization journal
│  └─ gallery-of-work.md     # project portfolio
├─ .gitignore
├─ observablehq.config.js    # site configuration
├─ package.json
└─ README.md
```

## Deployment

The site is automatically deployed via GitHub Actions to Vercel when changes are pushed to the main branch.

## Links

- Live site: https://jpotter.xyz
- Source code: https://github.com/jpotter80/jpotter.xyz
