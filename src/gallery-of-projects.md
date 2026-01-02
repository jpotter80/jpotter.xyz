---
theme: [deep-space, wide]
title: Gallery of Projects
---

<body>

<div class="hero">
<h1>Gallery of Projects</h1>
</div>

---

<div class=content>
<div>
<h2 class=major>MCP Documentation Framework</h2>
</div>
<div>
  <p>
  A production framework for building self-contained, searchable MCP (Model Context Protocol) servers from technical documentation. Transforms markdown/MDX documentation into intelligent resources for AI assistants using hybrid search that combines semantic vector similarity (via Modular's MAX framework and sentence-transformers) with keyword matching (BM25/FTS). Currently deployed with servers for Mojo programming language documentation, DuckDB docs, and the MCP protocol itself. Features include graceful fallback when embeddings are unavailable, YAML-based configuration, DuckDB with HNSW vector indexes, and Reciprocal Rank Fusion for intelligent result ranking. Built with Python, DuckDB, DuckLake for versioned data, and designed for distribution as standalone packages.
  </p>
</div>

<a href="https://github.com/jpotter80/mcp">MCP Documentation Framework</a>

---

<div class=content>
<div>
<h2 class=major>Go Vols! Multi-Language Examples</h2>
</div>
<div>
  <p>
  Educational repository demonstrating "Hello World" equivalents across 10 programming languages: Python, Rust, Go, C, C++, Java, JavaScript/Deno, SQL, Bash, and Fortran. Each language implementation includes detailed setup instructions, beginner-friendly documentation, and comprehensive CLI tutorials covering command-line basics, permissions, PATH configuration, and package management. Designed to help newcomers explore different programming paradigms (procedural, object-oriented, functional, systems programming) while learning fundamental development environment setup. All documentation written with clarity and accessibility as primary goals, demonstrating technical writing skills alongside programming knowledge.
  </p>
</div>

<a href="https://github.com/jpotter80/go-vols">Go Vols Repository</a>

---

<div class=content>
<div>
<h2 class=major>jpotter.xyz</h2>
</div>
<div>
  <p>
  This site! Built with Observable Framework for static site generation with integrated data visualization capabilities. Features automated deployment via GitHub Actions with hourly cache refresh to ensure data stays current. Demonstrates proficiency with Observable's data loader system, custom styling, and web-based data presentation. Hosted on GitHub Pages with CI/CD pipeline handling build, cache management, and deployment automatically.
  </p>
</div>

<a href="/index">My Website</a>

---

<div class=content>
<div>
<h2 class=major>Restaurant Recommendations Mapping</h2>
</div>
<div>
  <p>
  Interactive world map visualizing restaurant recommendations scraped from online forum discussions. Built complete ETL pipeline including web scraping with Python, automated geocoding using Brave Search API to convert restaurant names and locations to coordinates, data cleaning and validation, and final visualization using Observable Framework with observable.js. Features hybrid geocoding strategy combining city-level and precise coordinates, comprehensive data quality tracking (precision levels), and interactive tooltips with restaurant details. Demonstrates end-to-end data project skills from acquisition through presentation, working with real-world messy data.
  </p>
</div>

<a href="https://github.com/jpotter80/volquest-recos">Restaurant Mapping Project</a>

---

<div class=content>
<div>
<h2 class=major>Black Mountain Weather Dashboard</h2>
</div>
<div>
  <p>
  Real-time weather monitoring dashboard for Black Mountain, NC using National Weather Service API. Built with Observable Framework for responsive data visualization with automatic updates. Features hourly forecast displays, precipitation tracking, temperature trends, and severe weather alerts. Implements CI/CD deployment via GitHub Actions for continuous data refresh and automatic site updates. Demonstrates working with external APIs, data transformation pipelines, and creating production-ready dashboards for real-world use cases.
  </p>
</div>

<a href="https://github.com/jpotter80/black-mountain-weather">Weather Dashboard</a>

---

<div class=content>
<div>
<h2 class=major>Automated Data Pipeline with LLM Analysis</h2>
</div>
<div>
  <p>
  Intelligent data ingestion pipeline that automates the process of importing CSV files, creating PostgreSQL databases, analyzing data structure using large language models, and generating SQL transformations for data cleaning and normalization. The system uses LLM capabilities to understand data patterns, suggest appropriate data types, identify relationships, and propose cleaning strategies. Demonstrates integration of AI tools into traditional data engineering workflows, combining database management, data quality assessment, and automated transformation generation. Built with Python, PostgreSQL, and OpenAI API integration.
  </p>
</div>

<a href="https://github.com/jpotter80/data-pipeline">Data Pipeline</a>

---

<div class=content>
<div>
<h2 class=major>Bluesky LLM Posting Bot</h2>
</div>
<div>
  <p>
  Automated social media bot for Bluesky platform that generates original image content using AI. Pipeline orchestrates OpenAI's GPT-4 API for creative image description generation, HuggingFace API for text-to-image conversion using diffusion models, and Bluesky's social API for automated posting with proper image handling and metadata. Includes image resizing and compression to meet platform requirements, error handling and retry logic, and scheduled posting via cron jobs. Demonstrates API integration skills across multiple platforms, handling binary data, and building production automation workflows. Written in Python with Poetry for dependency management.
  </p>
</div>

<a href="https://github.com/jpotter80/bluesky-llm-posting">Bluesky Bot</a>

---

<div class=content>
<div>
<h2 class=major>Stellar Classification with Machine Learning</h2>
</div>
<div>
  <p>
  Machine learning project automating stellar classification between giant and dwarf stars using scikit-learn. Implements data preprocessing, feature engineering, model training and evaluation with multiple classification algorithms, and performance comparison across different approaches. Integrates PostgreSQL database for efficient data management and accessibility. Includes exploratory data analysis, visualization of stellar properties using matplotlib/seaborn, and model performance metrics evaluation. Demonstrates complete ML workflow from data preparation through model deployment, working with scientific datasets and applying statistical analysis to astronomical classification problems.
  </p>
</div>

<a href="https://github.com/jpotter80/stellar-classification">Stellar Classification</a>

---

<div class=content>
<div>
<h2 class=major>Voter Demographics Analysis with R</h2>
</div>
<div>
  <p>
  Statistical analysis and visualization of Buncombe County, NC voter registration data using R programming language. Project includes comprehensive data cleaning workflows, exploratory data analysis to identify demographic patterns, and publication-quality visualizations created with ggplot2. Demonstrates proficiency with R's tidyverse ecosystem including dplyr for data manipulation, statistical analysis capabilities, and data visualization best practices. Explores voter distribution by age, party affiliation, geographic location, and registration trends over time. Showcases ability to work with government datasets and communicate findings through clear, informative graphics.
  </p>
</div>

<a href="https://github.com/jpotter80/voter-data">Voter Data Analysis</a>

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
}

a[href] {
  color: #7fc8b6;
}

</style>