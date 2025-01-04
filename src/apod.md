---
theme: [deep-space, wide]
title: Astronomy Picture of the Day
---
<body>

<div class="hero">
  <h1>
  Astronomy Picture of the Day
  </h1>
  <h2>
  Sourced from the <a href="https://api.nasa.gov/">NASA.gov</a> api
  </h2>
</div>

---


```js
const apod = FileAttachment("./data/apod.json").json();
```

```js
display(
  html`<div class="space-y-4">
    <h3 class="text-2xl font-bold">${apod.title}</h3>
    ${apod.media_type === 'video' 
      ? html`<iframe src="${apod.url}" width="100%" height="400" frameborder="0"></iframe>`
      : html`<img src="${apod.url}" alt="${apod.title}" style="max-width: 100%; height: auto;" />`
    }
    <p class="text-sm italic">${apod.date}</p>
    <p>${apod.explanation}</p>
    ${apod.copyright ? html`<p class="text-sm">Copyright: ${apod.copyright}</p>` : ''}
  </div>`
);
```


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
  font-size: 14vw;
  font-weight: 900;
  line-height: 1;
  color: #7fc8b6;
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