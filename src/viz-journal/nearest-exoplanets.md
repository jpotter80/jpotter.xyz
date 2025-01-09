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
const exoplanetData = FileAttachment("/data/nearest_planets.csv").csv({typed: true})
```

```js
Plot.plot({
  color: { legend: true, scheme: "Turbo" },
  title: "The 20 Closest Confirmed Exoplanets",
  subtitle: "Parsecs from Earth",
  x: { grid: true },
  y: { type: "log", grid: true },
  caption:
    "This plot displays the 20 nearest confirmed exoplanets in relation to Earth. The distance shown is in parsecs (~3.26 light-years or 19 trillion miles). We visualize the exoplanets using their mass relative to Earth.",
  width,
  marks: [
    Plot.dot(exoplanetData, {
      x: "distance_parsecs",
      y: "mass_earth",
      stroke: "temp_kelvin",
      r: "radius_earth",
      channels: {name: "planet_name"}, // Add this line
      tip: true
    })
  ]
})
```
---

<article class="chart-analysis">
<header>
<div>
<h3>Earth's Nearest Neighbors</h3>
<h4>2025/01/09</h4>
</div>
</header>

<p>
  The closest 20 confirmed exoplanets to Earth represent an incredible variety in their physical characteristics, with distances ranging from 1.30 to 6 parsecs from our solar system. This means our closest planetary neighbors are within just 4-12 light-years of Earth.
</p>
<p>
  Proxima Centauri b, our nearest known exoplanet at just 1.30 parsecs (approximately 4.2 light-years) from Earth, orbits a small red dwarf star. This planet, with a mass of 1.07 Earth masses and a radius of 1.03 Earth radii, is remarkably similar in size to our own planet. Its equilibrium temperature of 234K (-39°C), while cold by Earth standards, places it in a potentially interesting range for planetary science studies.
</p>
<p>
  The temperatures among these nearby worlds span from a frigid 182K (-91°C) for GJ 1002 c to a scorching 660K (387°C) for HD 20794 b. This wide range illustrates the diverse environments found even in our immediate cosmic neighborhood. The mass range is equally diverse, from planets similar to Earth to gas giants several times Jupiter's mass.
</p>
<p>
  Looking at the stellar types of these planetary systems, M-type red dwarf stars dominate our nearby exoplanet census. This aligns with the fact that red dwarfs are the most numerous type of star in our galaxy. The discovery methods for these planets show a strong preference for radial velocity measurements, which has proven particularly effective for detecting planets around nearby stars.
</p>
<p>
  The discovery timeline of these particular worlds span from 2011 to 2024, with new planets consistently being found as detection methods improve. This suggests that even in our well-studied stellar neighborhood, there may still be undiscovered worlds waiting to be found. Each new discovery adds to our understanding of planetary formation and the potential for habitable worlds near our solar system.
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
