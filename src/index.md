---
theme: [deep-space, wide]
title: Home
---

<div class="hero">
  <h1>Hello,<br> I'm James.</h1>
  <h2>I'm a data developer. Welcome to my site!</h2>
  <a href="https://github.com/jpotter80">Visit My GitHub<span style="display: inline-block; margin-left: 0.25rem;">↗︎</span></a>
</div>

---

<div class=content>
<div>
    <h2 class="major" style="color: #fb8779;">ABOUT ME</h2>
</div>

<div>
    <p>I'm James Potter, a data engineer and technical developer based in the scenic mountains of Western North Carolina. For the past two years, I've been intentionally re-skilling into AI/ML infrastructure and developer tooling after previously working as a pharmacy technician. My work focuses on building documentation systems, developer tools, and data infrastructure that makes complex technical information accessible to both humans and AI agents.</p>
</div>

<div>
    <h3 class="minor">What I do</h3>
</div>

<div>
    <p>I build developer tools and infrastructure for AI/ML workflows, specializing in documentation search systems, vector databases, and data processing pipelines. My current focus is on the Model Context Protocol (MCP) ecosystem, where I've created a framework that transforms technical documentation into intelligent, searchable resources for AI assistants. I work extensively with emerging technologies including Mojo programming language, Modular's MAX framework, and modern data tools like DuckDB and Observable Framework.</p>
</div>

<div>
    <h3 class="minor">Recent Projects</h3>
</div>

<div>
    <ul>
    <p>
    - MCP Documentation Framework
https://github.com/jpotter80/mcp

Built a production framework for converting markdown documentation into searchable MCP servers with hybrid vector + keyword search. Created self-contained servers for Mojo language documentation, DuckDB docs, and the MCP protocol itself. Implements semantic search using MAX embeddings (sentence-transformers) combined with full-text search via DuckDB's HNSW indexes and BM25 ranking.
    </p>
    <p>
    - Hybrid Search Implementation

Designed and implemented Reciprocal Rank Fusion (RRF) algorithm combining vector similarity search with keyword matching for improved documentation retrieval. System includes graceful fallback to keyword-only search when vector embeddings are unavailable, demonstrating production-ready error handling.
    </p>
    <p>
    - Multi-Language Programming Examples
https://github.com/jpotter80/go-vols

Created beginner-friendly repository demonstrating "Hello World" equivalents across 10 programming languages (Python, Rust, Go, C, C++, Java, JavaScript, SQL, Bash, Fortran) with detailed setup documentation and CLI tutorials for newcomers to programming.
    </p>
    <p>
    - Data Visualization Projects

Built interactive data visualizations using Observable Framework, including restaurant recommendation mapping with automated geocoding pipelines and sports statistics dashboards. Demonstrates proficiency in web-based data presentation and ETL workflows.
    </p>
    </ul>
</div>

<div>
    <h3 class="minor">Technical Stack</h3>
</div>

<div>
    <h4 class="minor">Languages & Core Technologies:</h4>
</div>

<div>
    <p>Python, SQL, Markdown, HTML/CSS, JavaScript</p>
</div>

<div>
    <h4 class="minor">Analysis & Processing:</h4>
</div>

<div>
    <p>DuckDB, Pandas, NumPy, Excel, Scikit-learn</p>
</div>

<div>
    <h4 class="minor">Visualization:</h4>
</div>

<div>
    <p>Observable Framework, Jupyter Notebooks, Excel, Matplotlib/Seaborn</p>
</div>

<div>
    <h4 class="minor">Tools:</h4>
</div>

<div>
    <p>Git, Docker, UV (Python Package Management), VS Code, GitHub Copilot</p>
</div>

<div>
    <h4 class="minor">Databases:</h4>
</div>

<div>
    <p>DuckDB, PostgreSQL</p>
</div>

<div>
    <h3 class="minor">Current Focus</h3>
</div>

<div>
    <p>
      <li><i>Expanding my data service offerings with specialized PDF processing and web data collection</i></li>
    </p>
    <p>
      <li><i>Developing reusable data quality assessment frameworks</i></li>
    </p>
    <p>
      <li><i>Creating reproducible data workflows that combine multiple processing stages</i></li>
    </p>
    <p>
      <li><i>Integrating AI tools to enhance data extraction and cleaning processes</i></li>
    </p>  
</div>

---

<div>
    <p>I'm available for freelance data projects and consulting. Whether you need help cleaning messy datasets, extracting information from documents, or building data pipelines, I'd love to discuss how I can help. Feel free to reach out through LinkedIn or explore my projects on GitHub.</p>
</div>

<div>
</div>
</div>

---

## Links

<!-- Footer -->
<div class="footer">
    <ul class="contact">
        <li class="icon solid fa-envelope"><a href="mailto:jpotter80@proton.me">jpotter80@proton.me</a></li>
        <li class="icon brands fa-github"><a href="https://github.com/jpotter80">GitHub</a></li>
        <li class="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/jpotter80/">LinkedIn</a></li>
        <li class="icon brands fa-bluesky"><a href="https://bsky.app/profile/jpotter.xyz">Bluesky</a></li>
        <li class="icon brands fa-discord"><a href="https://discord.com/channels/@jpotter.xyz">Discord</a></li>
    </ul>
    <ul class="copyright">
        <li>&copy; 2025 James Potter. All rights reserved.</li>
    </ul>

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

.content  {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 8rem;
  font-size: 20px;
  text-wrap: balance;
  color: var(--theme-foreground-muted);
}

h3.minor {
  color: #375ba6;
}

h4.minor {
  color: #88a0b9;
}

a[href] {
  color: #7fc8b6;
}


@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
}

</style>
