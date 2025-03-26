---
theme: [deep-space, wide]
title: Viz Journal
sql:
  volBaseballHistory: /data/vol-baseball-history.csv
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
const volBaseballHistory = FileAttachment("/data/vol-baseball-history.csv").csv({typed: true})
```

```js
Plot.plot({
  width,
  title: "Tennessee Volunteers Baseball",
  subtitle: "Wins per year",
  x: { label: "Year", type: "linear" },
  y: { grid: true },
  marks: [
    Plot.dot(volBaseballHistory, {
      x: "Year",
      y: "Wins",
      stroke: "#ff8c38",
      r: "Wins",
      tip: true
    })
  ]
})
```
---

<article class="chart-analysis">
  <header>
  <div>
    <h3>Tennessee Volunteers Baseball Historical Trajectory</h3>
    <h4>2024/12/15</h4>
  </header>
  <p>
    The Tennessee baseball program has demonstrated remarkable growth over its 128-year history, with an impressive overall record of 2,291 wins, 1,686 losses, and 14 ties, achieving a historical winning percentage of 57.6% across 3,977 total games played.
  </p>
  <p>
    Under current head coach Tony Vitello, the program has reached unprecedented heights, posting a 72.5% win rate (295-112) since 2018. This includes three seasons ('20, '22, and '24), with a winning percentage above .800. This performance significantly surpasses the program's historical averages and represents a golden era in Tennessee baseball.
  </p>
  <p>
    The program's foundation was built by several long-tenured coaches who have left lasting legacies. Bill Wright (19 seasons, 407-309-2) and Rod Delmonico (18 seasons, 699-396) stand out for their longevity and success. Delmonico's 699 wins remain the most in program history, while Wright's nearly two decades of leadership provided crucial stability during the program's development.
  </p>
  <p>
    Recent performance metrics highlight the program's upward trajectory. In the past 21 seasons (2004-2024), Tennessee has maintained a 59.5% winning percentage, demonstrating consistent improvement above the program's historical average. This period has seen significant investments in facilities, coaching, and player development, resulting in enhanced competitive success.
  </p>
  <p>
    Looking at the program's evolution, there's a clear pattern of increasing success and stability. From the challenging early years, including the program's lowest point in 1958 (2-13-1 under George Cafego), to the modern era's sustained excellence, Tennessee baseball has transformed into one of the nation's premier programs. This growth reflects not just athletic achievement, but the development of a comprehensive program that consistently competes at the highest level of collegiate baseball. And in 2025, Tennessee Baseball will take the diamond as the reigning National Champions.
  </p>
</article>

---

```sql
SELECT * FROM volBaseballHistory
```

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
