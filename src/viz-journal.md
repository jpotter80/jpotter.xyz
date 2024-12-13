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



```js
const weather = FileAttachment("/data/weather.csv").csv({typed: true})
```



```js
Plot.plot({
  title: "Asheville Regional Airport Daily Rain Totals",
  width,
  caption:
    "This chart illustrates rain totals leading up to and including Hurricane Helene",
  subtitle: "September 2024",
  marks: [
    Plot.areaY(weather, {
      x: "date",
      y: "precipitation",
      fill: "#375ba6",
      fillOpacity: 1,
      tip: true,
      curve: "basis",
    })
  ]
})
```
  <div>
    <p>
      <h3>This chart clearly indicates the amount of rain received from Helene at Asheville Regional Airport, which caused widespread flooding throughout the region.
      </h3>
    </p>
  </div>

---

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
  font-size: 8vw;
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

p  {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 8rem;
  font-size: 24px;
  text-wrap: balance;
  color: var(--theme-foreground-muted);
}

h3 {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0 2rem;
  font-size: 24px;
  text-wrap: balance;
}

</style>
