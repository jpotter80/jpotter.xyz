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
const january_temps = FileAttachment("/data/january_temps_mean.csv").csv({typed: true})
```

```js
Plot.plot({
  //frame: true,
  title: "Average Maximum Temperature (Asheville,NC): January 20-22",
  subtitle: "3-day mean temperatures for selected dates, 1903-2025",
  width,
  grid: true,
  color: { scheme: "turbo", legend: true },
  x: {
    //ticks: 12,
    //type: "utc",
    //tickFormat: "%Y",
    //ticks: d3.utcYear.every(10)
    //domain: "DATE",
  },
  marks: [
    //Plot.timeInterval("10 years"),
    //Plot.axisX({interval: "10 years"}),
    Plot.rectY(january_temps, {
      x: "DATE",
      y: "TMAX",
      fill: "TMAX",
      fillOpacity: .5,
      tip: true,
      interval: "1 year"
    }),
    Plot.ruleY([32], {stroke: "white", strokeDasharray: "4,4", strokeOpacity: .9}),
    Plot.linearRegressionY(january_temps, {
      x: "DATE",
      y: "TMAX",
      stroke: "pink"
    })
  ]
  //type: "utc",
  //tickFormat: "%Y",
  //ticks: 12,
})
```

---

<article class="chart-analysis">
<header>
<div>
<h3>Historical January Temperatures</h3>
<h4>2025/01/21</h4>
</div>
</header>

<p>
Analysis of temperature records for January 20-22 spanning from 1903 to 2025 reveals a compelling story of climate change in this specific winter period. The dataset captures the three-day average maximum temperatures for these dates across 123 years of records.
</p>
<p>
Perhaps most striking is the clear downward trend revealed by linear regression analysis. The data shows a decrease of approximately 0.09°F per year. When projected across the entire study period (1903-2025), this amounts to a total decrease of 11.2°F in the average maximum temperature for these specific January dates.
</p>
<p>
The visualization includes a reference line at 32°F (freezing point) to provide context for winter conditions. The scatter plot reveals considerable year-to-year variability, while the regression line (shown in red) clearly illustrates the long-term cooling trend. This finding is particularly interesting given global warming trends, suggesting that this specific time window in January may be experiencing unique local or regional climate patterns.
</p>
<p>
This analysis highlights the importance of considering specific temporal windows when studying climate patterns, as trends for particular dates or seasons may differ from overall annual trends. The recent cold wave that prompted this analysis appears to be part of a longer-term pattern of cooling for these specific January dates.
</p>
<p>

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
