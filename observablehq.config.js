// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "jpotter.xyz",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],
  pages: [
    {
      name: "Astronomy Picture of the Day",
      path: "/apod",
    },
    {
      name: "Gallery of Projects",
      path: "/gallery-of-projects",
    },
    {
      name: "My Weather",
      path: "/my-weather",
    },
    {
      name: "Viz Journal",
      collapsible: true,
      open: true,
      pages: [
        {
          name: "Hurricane Helene Rainfall - 2024/12",
          path: "/viz-journal/hurricane-helene-rainfall",
        },
        {
          name: "Tennessee Volunteers Baseball Historical Wins - 2024/12",
          path: "/viz-journal/tennessee-volunteers-baseball-historical-wins",
        },
        {
          name: "2024 CFP Team Comparison - 2024/12",
          path: "/viz-journal/2024-cfp-team-comparison",
        },
        {
          name: "Earth's Nearest Neighbors - 2025/01",
          path: "/viz-journal/nearest-exoplanets",
        },
        {
          name: "Exoplanet Heatmap - 2025/01",
          path: "/viz-journal/exoplanet-heatmap",
        },
        {
          name: "Exoplanet Host Stars - 2025/01",
          path: "/viz-journal/hr-diagram",
        },
        {
          name: "Historical January Temperatures - 2025/01",
          path: "/viz-journal/january-temps",
        },
        {
          name: "March Madness 2025 - 2025/03",
          path: "/viz-journal/march-madness-2025",
        },
      ],
    },
    {
      name: "Quick Reference",
      collapsible: true,
      open: true,
      pages: [
        {
          name: "Bash",
          path: "/quick-reference/bash",
        },
        {
          name: "Data Types",
          path: "/quick-reference/data-types",
        },
        {
          name: "Docker CLI",
          path: "/quick-reference/docker-cli",
        },
        {
          name: "Duckdb",
          path: "/quick-reference/duckdb",
        },
        {
          name: "Excel",
          path: "/quick-reference/excel",
        },
        {
          name: "GNU Coreutils",
          path: "/quick-reference/gnu-coreutils",
        },
        {
          name: "KWin for KDE",
          path: "/quick-reference/kwin",
        },
        {
          name: "Linux System Administration",
          path: "/quick-reference/linux-sysadmin",
        },
        {
          name: "Neovim",
          path: "/quick-reference/neovim",
        },
        {
          name: "Powershell",
          path: "/quick-reference/powershell",
        },
        {
          name: "Python Algorithms",
          path: "/quick-reference/python-algorithms",
        },
        {
          name: "SQL",
          path: "/quick-reference/sql",
        },
        {
          name: "Statistics & Machine Learning",
          path: "/quick-reference/stats-ml",
        },
      ],
    },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="/data/logo.svg" type="image/svg" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
