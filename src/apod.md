---
theme: [deep-space, wide]
title: Astronomy Picture of the Day
---
<body>

# Astronomy Picture of the Day
Sourced from <a href="https://api.nasa.gov/">NASA.gov api</a>

---


```js
const apod = FileAttachment("./data/apod.json").json();
```

```js
display(
  html`<div class="space-y-4">
    <h1 class="text-2xl font-bold">${apod.title}</h1>
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

a[href] {
  color: #7fc8b6;
}

</style>