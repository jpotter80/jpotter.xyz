---
theme: [deep-space, wide]
title: Gallery of Work
---

<body>

<div class="hero">
<h1>Gallery of Work</h1>
</div>

---

<div class=content>
<div>
<h2 class=major>jpotter.xyz</h2>
</div>
<div>
  <p>
  This site! Created using Observable Framework for static site generation and data integration via data loaders.
  </p>
</div>

<a href="/index">My Website</a>

---


<div class=content>
<div>
<h2 class=major>My Local Weather Dashboard</h2>
</div>
<div>
  <p>
  This dashboard visualizes weather data for Black Mountain, NC. The project uses the National Weather Service api and Observable Framework, CI/CD deployment using GitHub actions.
  </p>
</div>

<a href="/my-weather">My Weather</a>

---

<div class=content>
<div>
<h2 class=major>Data Pipeline</h2>
</div>
<div>
  <p>
  This project automates the process of ingesting CSV files, creating a PostgreSQL database, analyzing data structure using llm's, and generating SQL transformations for data cleaning and normalization.
  </p>
</div>

<a href="https://github.com/jpotter80/data-pipeline">Data Pipeline</a>

---

<div class=content>
<div>
<h2 class=major>Voter Demographics with R</h2>
</div>
<div>
  <p>
  In this project we explore and clean Buncombe County, NC voter data, using R scripts, with visualizations created by ggplot.
  </p>
</div>

<a href="https://github.com/jpotter80/voter-data">Voter Data</a>

---

<div class=content>
<div>
<h2 class=major>Bluesky LLM Posting Bot</h2>
</div>
<div>
  <p>
  An automated Bluesky posting bot written in Python that is configured to generate image descriptions via OpenAI's api, which is then sent to a HuggingFace api endpoint to create an image from the description. The script will then format the data for Bluesky's api and upload to the specific account.
  </p>
</div>

<a href="https://github.com/jpotter80/bluesky-llm-posting">Bluesky LLM Posting</a>

---

<div class=content>
<div>
<h2 class=major>Stellar Classification</h2>
</div>
<div>
  <p>
  This project demonstrates the effectiveness of machine learning in automating stellar classification between giant and dwarf stars. The integration of a PostgreSQL database enhances data accessibility and management. Future work may include refining the model with additional features, exploring other classification algorithms, and expanding the dataset to include more diverse stellar types.
  </p>
</div>

<a href="https://github.com/jpotter80/stellar-classification">Stellar Classification</a>

---

</div>

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

h2.major {
  color: #375ba6;
}

a[href] {
  color: #7fc8b6;
}

@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }

a[href] {
  color: #7fc8b6;
}

</style>


