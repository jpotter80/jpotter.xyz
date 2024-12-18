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
  title: "Asheville Regional Airport Daily Rain Totals (Inches)",
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

<article class="chart-analysis">
  <header>
    <h3>Hurricane Helene Rainfall Analysis</h3>
    <h4>2024/12/14</h4>
  </header>
  <p>
    This chart clearly indicates the extreme amount of rain received from Helene at Asheville Regional Airport, causing widespread flooding throughout the region.
  </p>
  <p>
    From September 24th through September 27th, 2024, this station recorded 14.19 inches of precipitation. For the entire month of September, the station recorded 17.77 inches of precipitation. Even with the other 26 days of this period including one day of 2.27 inches, these four days still account for 80% of the rain total for the month.
  </p>
  <p>
    As of December 11, 2024, the State of North Carolina has verified 103 storm-related fatalities; 43 coming from Buncombe County alone. <a href="https://www.ncdhhs.gov/assistance/hurricane-helene-recovery-resources/hurricane-helene-storm-related-fatalities">(ncdhhs.gov)</a> This county includes the popular tourist destination of Asheville, as well as our own vibrant Town of Black Mountain. 
  </p>
  <p>
    In Black Mountain, we were without water and power for more than three weeks, while the region's infrastructure was decimated, including more than 7,200 incidents of road and bridge damage.
  </p>
  <p>    
    The lasting effects of this storm will be felt for generations, with some hollows and small towns completely washed away. Though the several-billion dollars needed for rebuilding the region is an enormous figure, the cultural significance of what was lost is priceless.
  </p>
</article>

---


```js
const volBaseballHistory = FileAttachment("/data/vol-baseball-history.csv").csv({typed: true})
```

```js
Plot.plot({
  width,
  title: "Tennessee Volunteer Baseball",
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
<article class="chart-analysis">
  <header>
  <div>
    <h3>Tennessee Volunteer Baseball Historical Trajectory</h3>
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

```js
const cfpData = FileAttachment("/data/cfp-bracket.csv").csv({typed: true})
```

```js
Plot.plot({
  // Set explicit dimensions for the plot
  width,
  height: 500,

  // Main plot labels
  title: "College Football Playoff Teams",
  subtitle: "Offensive vs Defensive Performance",

  // X-axis configuration
  x: { 
    label: "Points per game →",
    grid: true,
    // Domain will be automatically set based on data range
    // Typically between 20-50 points for college football
  },

  // Y-axis configuration
  y: { 
    label: "↑ Points allowed per game",
    grid: true,
    // Lower values are better for defense
    // Typical range is 10-35 points allowed
  },

  // Visual elements to be plotted
  marks: [
    // Scatter plot points
    Plot.dot(cfpData, {
      x: "points_per_game",
      y: "points_allowed_per_game",
      stroke: "#fb8779",  // Set the outline color
      fill: "#fb8779",    // Set the fill color
      r: 4,  // Radius of points in pixels
      tip: true  // Enables tooltips on hover
    }),

    // Team name labels
    Plot.text(cfpData, {
      x: "points_per_game",
      y: "points_allowed_per_game",
      text: "team",
      dx: 14,  // Shift labels 12 pixels right of points
      dy: -9,  // Shift labels 8 pixels up from points
      fontSize: 10,
      fill: "currentColor",  // Text color matching the theme
      // Add a background to make text more readable
      background: "var(--plot-background)"  // Uses the plot's background color
    })
  ],

  // Add some space around the plot to prevent clipping
  margin: 40,
  
  // Style configuration
  style: {
    // Ensure points are drawn above gridlines but below text
    background: "transparent",
    overflow: "visible"
  }
})
```
---

<article class="chart-analysis">
<header>
<div>
<h3>College Football Playoff Team Comparison</h3>
<h4>2024/12/17</h4>
</div>
</header>

<p>
The College Football Playoff teams display distinct offensive and defensive characteristics that highlight their paths to qualification. Looking at the scatter plot of points per game versus points allowed per game, we can identify several key patterns in team performance.
</p>

<p>
Indiana leads all teams in offensive production, averaging a commanding 40.3 points per game, closely followed by Notre Dame with 39.8 points per game. These high-powered offenses set the standard for scoring efficiency in the playoff field, though strength of schedule certainly plays a factor.
</p>

<p>
Georgia, while posting more modest offensive numbers at 31.9 points per game, earned their spot through facing the toughest schedule (ranked #1 in strength of schedule) while maintaining a respectable points allowed average of 21.8. Their ability to perform consistently against elite competition underscores their playoff worthiness.
</p>

<p>
Other notable performers include Boise State (37.7 ppg) and Oregon (36.9 ppg), who both demonstrate strong offensive capabilities while maintaining competitive defensive metrics. SMU rounds out the top five scoring offenses with 36.8 points per game, showcasing the depth of offensive talent in this year's playoff field.
</p>

<p>
A deeper analysis reveals an inverse relationship between offensive output and strength of schedule. The teams with the highest scoring averages generally faced easier schedules: Indiana (40.3 ppg, SOS: 42nd) and Boise State (37.7 ppg, SOS: 70th) exemplify this trend. Conversely, teams that faced the toughest schedules show more modest scoring numbers: Georgia (31.9 ppg, SOS: 1st), Texas (33.6 ppg, SOS: 3rd), and Ohio State (35.5 ppg, SOS: 9th). Oregon and Notre Dame stand out as exceptions, maintaining high scoring averages (36.9 and 39.8 ppg respectively) despite facing relatively challenging schedules (18th and 21st). This pattern suggests that while offensive production is important, it must be evaluated within the context of schedule difficulty when assessing a team's playoff credentials.
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
