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
const hr_diagram = FileAttachment("/data/hr_diagram.csv").csv({typed: true})
```

```js
Plot.plot({
  // Basic plot setup
  title: "Hertzsprung-Russell Diagram of Exoplanet Host Stars",
  subtitle: "Data from NASA Exoplanet Archive (2025)",
  // width: 800,
  // height: 600,
  width,
  grid: true,  // Adds reference grid
  
  // X-axis configuration
  x: {
    label: "Surface Temperature (K)",
    // transform: d => d,  // No transform needed - using pre-calculated log_temp
    reverse: true,      // Critical for H-R diagram - hotter stars on left
    // domain: [4.7, 3.5], // Log temperature range
    // Convert log values back to actual temperatures for tick labels
    tickFormat: d => Math.round(Math.pow(10, d))
  },
  
  // Y-axis configuration
  y: {
    label: "Luminosity (log L/L☉)",
    domain: [-3, 4]    // Log luminosity range covering our data
  },
  
  marks: [
    // Add a frame around the plot
    // Plot.frame({stroke: "#999"}),
    
    // Main scatter plot of stars
    Plot.dot(hr_diagram, {
      x: "log_temp",   // Use log temperature for x-position
      y: "st_lum",     // Use log luminosity for y-position
      r: d => Math.sqrt(d.st_rad) * 4,  // Point size based on stellar radius
      fill: "spectral_class",  // Color points by spectral type
      fillOpacity: 0.6,        // Some transparency for overlapping points
      // Detailed tooltip showing star properties
      title: d => `${d.hostname}
Temperature: ${d.st_teff.toLocaleString()}K
Luminosity: ${d.st_lum.toFixed(2)} L☉
Radius: ${d.st_rad.toFixed(2)} R☉
Type: ${d.st_spectype || "Unknown"}`,
    })
  ],
  
  // Color scale configuration for spectral classes
  color: {
    // Standard sequence of spectral types
    domain: ["O", "B", "A", "F", "G", "K", "M"],
    // Traditional astronomical colors for each type
    range: ["#9bb0ff", "#aabfff", "#cad7ff", "#fbf8ff", "#fff4e8", "#ffd2a1", "#ffcc6f"],
    legend: true,
    label: "Spectral Class"
  },
  
  // Visual styling
  style: {
    backgroundColor: "black",  // Traditional astronomical dark background
    color: "white",           // Light text for dark background
    fontSize: 12
  }
})
```

---

<article class="chart-analysis">
<header>
<div>
<h3>Hertzsprung-Russell Diagram</h3>
<h4>2025/01/17</h4>
</div>
</header>

<p>
The Hertzsprung-Russell diagram of confirmed exoplanet host stars reveals fascinating insights into the types of stars where we've discovered planets. This visualization, created from NASA Exoplanet Archive data through January 2025, plots stellar temperature against luminosity for over 5,800 stars known to host exoplanets, providing a snapshot of where planetary systems are found in our galactic neighborhood.
</p>
<p>
The distribution of host stars shows a clear concentration along the main sequence, stretching from hot, luminous B-type stars (log T ≈ 4.5, log L ≈ 3) to cooler, dimmer K and M dwarfs. This main sequence clustering reflects both the natural abundance of such stars and the selection effects of our planet-finding techniques. The data includes several notable B-type stars at the diagram's upper left, including mu2 Scorpii with a surface temperature of 21,700K and luminosity 3.8 times solar, demonstrating that planets can form and survive around massive, hot stars.
</p>
<p>
Several distinct populations emerge in the data. There's a significant population of evolved giants in the upper right region of the diagram, indicating that many planetary systems persist through their host stars' post-main-sequence evolution. Of particular interest is the presence of compact objects like DP Leo, a white dwarf with extremely low luminosity (log L ≈ -2.4) but high temperature (13,500K), providing evidence that planets can survive the dramatic stellar evolution process.
</p>
<p>
The temperature distribution of host stars shows interesting gaps, particularly around log T = 4.0-4.2. This may reflect genuine differences in planetary system formation or survival rates around stars of different masses, but could also be influenced by observational biases in our planet-detection methods. The relative scarcity of the hottest stars (T > 30,000K) in our sample is likely due to both their natural rarity and the challenges of detecting planets around such bright, massive stars.
</p>
<p>
When examined in the context of stellar evolution, this diagram not only maps where we find planets today but hints at the life cycles of planetary systems. The presence of planets across such a wide range of stellar types and evolutionary stages suggests that planetary systems are remarkably robust, capable of surviving significant changes in their host stars' properties over billions of years. This diversity of host stars also implies that planetary formation is a ubiquitous process, occurring around stars of virtually all masses and evolutionary stages.
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
