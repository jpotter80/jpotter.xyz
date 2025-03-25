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
const marchMadnessData = FileAttachment("/data/march-madness.csv").csv({typed: true})
```

```js
Plot.plot({
  color: { legend: true },
  width,
  x: { grid: true, label: "Offensive Rating" },
  y: { grid: true, label: "Defensive Rating", reverse: true },
  marks: [
    Plot.dot(marchMadnessData, {
      x: "ORtg",
      y: "DRtg",
      stroke: "Team",
      r: "AdjEffMargin",
      tip: true
    })
  ]
})
```
---

<article class="chart-analysis">
<header>
<div>
<h3>Sweet 16 Team Efficiency</h3>
<h4>2025/03/25</h4>
</div>
</header>

<p>
As the 2025 NCAA Tournament narrows to the Sweet 16, a clear hierarchy has emerged among the remaining teams. Duke leads all teams with an impressive +39.00 adjusted efficiency margin, followed closely by Houston (+35.87) and Florida (+35.62). This statistical dominance suggests we could be witnessing one of the strongest tournament fields in recent years, with the top seeds validating their rankings through exceptional offensive and defensive metrics.
</p>

<p>
The SEC has flexed its muscles in this tournament, placing six teams in the Sweet 16—more than any other conference. Auburn, Tennessee, Alabama, Kentucky, Mississippi, and Arkansas all represent the powerhouse conference, showcasing the SEC's depth and quality. The Big Ten follows with four representatives (Michigan State, Maryland, Purdue, and Michigan), while the Big 12 features three teams (Houston, Texas Tech, and BYU). This conference distribution challenges the traditional notion of ACC dominance, with Duke standing as the conference's lone representative.
</p>

<p>
A fascinating trend emerges when examining team playing styles. Alabama runs the fastest pace among remaining teams (75.0 possessions per 40 minutes), while Houston operates at the tournament's slowest tempo (61.6). This stark contrast highlights different paths to success—Houston suffocates opponents with the nation's top-ranked defense (88.0 defensive rating), while Alabama overwhelms teams with explosive offense at a breakneck pace. Four of the top five defensive teams in the country have reached the Sweet 16, reinforcing the adage that defense wins championships.
</p>

<p>
The "luck factor" reveals which teams might be overperforming their statistical profiles. Michigan boasts the highest luck rating (+0.079), suggesting they've won more games than their efficiency metrics would predict. Conversely, Arizona has the lowest luck rating (-0.039), indicating they're potentially better than their record shows. This statistical anomaly could make Arizona a dangerous underdog as the tournament progresses, while raising questions about Michigan's sustainability against elite competition.
</p>

<p>
When examining strength of schedule, Alabama stands out with the toughest slate faced this season. Their top-ranked schedule combined with their exceptional efficiency margin makes them a serious title contender despite their #2 seed. At the other extreme, Maryland has faced the weakest non-conference schedule among Sweet 16 teams, which might raise concerns about their preparedness for high-level tournament competition. As we move into the regional semifinals, teams that have been battle-tested against top competition like Alabama, Auburn, and Kentucky may hold a significant psychological advantage over those that haven't faced as many elite opponents.
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
