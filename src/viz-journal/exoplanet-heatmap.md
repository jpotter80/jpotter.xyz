---
theme: [deep-space, wide]
title: Viz Journal
---
<head>

</head>

<body>

  <div class="hero">
    <h1>Viz Journal</h1>
    <h2>Analyses of Interests</h2>
  </div>


---

```js
const bins = FileAttachment("/data/bins.csv").csv({typed: true})
```

```js
Plot.plot({
  title: "Heatmap of Confirmed Exoplanets",
  subtitle: "Exploring Celestial Coordinates (ra & dec)",
  width,
  aspectRatio: 1,
  x: { domain: [0, 360] },
  y: { domain: [-90, 90] },
  marks: [
    Plot.frame({ fill: 0 }),
    Plot.raster(bins, {
      x: "ra",
      y: "dec",
      fill: "count",
      width: 360 / 2,
      height: 180 / 2,
      imageRendering: "pixelated",
      tip: true,
      legend: true
    })
  ],
  color: {
    legend: true,
    label: "Number of Exoplanets"
  }
})
```
---

<article class="chart-analysis">
<header>
<div>
<h3>Exoplanet Heatmap</h3>
<h4>2025/01/14</h4>
</div>
</header>

<p>
 The celestial distribution of confirmed exoplanets reveals intriguing patterns in our galaxy's planetary population. This heatmap visualization, created from NASA Exoplanet Archive data current through January 2025, maps 5,811 confirmed exoplanets across the celestial sphere using equatorial coordinates (right ascension and declination).
</p>
<p>
The data has been binned into 2-degree sections across both coordinates, creating a balanced grid that highlights regions of high exoplanet density while maintaining astronomical significance. This binning approach reduces noise while preserving meaningful spatial relationships, allowing us to see both broad patterns and localized concentrations of planetary discoveries.
</p>
<p>
Several distinct features emerge from this visualization. The most prominent is the concentration of discoveries along the galactic plane, where our surveys have focused most intensively. There's a notable bias toward the northern celestial hemisphere, reflecting the historical dominance of northern hemisphere observatories in exoplanet detection. The Kepler Space Telescope's primary field of view is particularly evident as a high-density region, showcasing the impact of dedicated survey missions on our understanding of exoplanet populations.
</p>
<p>
The visualization also reveals significant gaps in coverage, particularly near the celestial poles and in certain regions of the southern sky. These gaps don't necessarily indicate an absence of exoplanets but rather highlight the limitations and biases in our current detection capabilities and survey strategies. The pixelated rendering method chosen for this visualization deliberately preserves these discrete boundaries, making it easier to identify areas that merit further investigation.
</p>
<p>
As we continue to discover new exoplanets through missions like TESS and upcoming projects like the Nancy Grace Roman Space Telescope, this distribution map will evolve. The current snapshot provides not just a record of our discoveries but also a roadmap for future exoplanet surveys, helping to identify regions where increased observational effort could yield valuable new insights into the galactic distribution of planetary systems.
</p>

---


</article>

</body>

<style>

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Consolas, Menlo, Monaco, 'Courier New', monospace;
  margin: 4rem 0 8rem;
  text-wrap: balance;
  text-align: center;
}

.hero h1 {
  margin: 1rem 0;
  padding: 1rem 0;
  max-width: none;
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  color: #7fc8b6;
}

.hero h2 {
  margin: 0;
  max-width: 34em;
  font-size: 20px;
  font-style: initial;
  font-weight: 500;
  line-height: 1.5;
  color: var(--theme-foreground-muted);
}

a[href] {
  color: #7fc8b6;
}

.chart-analysis {
  margin: 4rem auto;
  max-width: 90%;
  padding: 2rem;
  border-top: 1px solid var(--theme-foreground-muted);
}

.chart-analysis header {
  margin-bottom: 2rem;
}

.chart-analysis h3 {
  text-align: left;
  display: block;
  margin: 0;
  font-size: 28px;
  color: #7fc8b6;
}

.chart-analysis h4 {
  text-align: left;
  display: block;
  margin: 0;
  font-size: 22px;
  color: #7fc8b6;
}

.chart-analysis p {
  text-align: justify;
  margin: 1.5rem 0;
  font-size: 20px;
  text-wrap: balance;
  color: var(--theme-foreground-muted);
  line-height: 1.6;
  hyphens: auto;
}

.chart-analysis p:first-of-type {
  margin-top: 0;
}

.chart-analysis p:last-of-type {
  margin-bottom: 0;
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
  
  .chart-analysis {
    max-width: 70ch;
  }
}

</style>
