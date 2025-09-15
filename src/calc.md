---
title: Markdown Calculator
toc: false
theme: [deep-space, wide]
---

# 🥾 Markdown (Price) Calculator

An interactive in-browser calculator for quickly determining markdowns (ending in .99) while ensuring a minimum target discount. This page has been refactored from a standalone HTML file into an Observable Framework page.

## How it Works

1. Enter (or adjust) a target discount percent for the current pricing session.
2. Enter original prices one after another; each result is rounded to the nearest qualifying .99 price that still meets (or slightly exceeds) the discount.
3. A running reverse‑chronological history is maintained for quick reference.

---

```js
// Utility: core markdown calculation (extracted for clarity & reusability)
function calculateMarkdown(originalPrice, targetDiscountPercent) {
  const targetPrice = originalPrice * (1 - targetDiscountPercent / 100);
  // Candidate .99 price just below target
  const floorWhole = Math.floor(targetPrice);
  const lowerPrice = Math.max(0.99, floorWhole - 0.01); // (x).99 below
  const upperPrice = Math.max(0.99, floorWhole + 0.99); // (x+1).99 above
  const lowerDiscount = (1 - lowerPrice / originalPrice) * 100;
  const upperDiscount = (1 - upperPrice / originalPrice) * 100;
  // Prefer the price that still satisfies the target discount; else fallback
  let salePrice = upperDiscount >= targetDiscountPercent ? upperPrice : lowerDiscount >= targetDiscountPercent ? lowerPrice : lowerPrice;
  const actualDiscountPercent = (1 - salePrice / originalPrice) * 100;
  const savings = originalPrice - salePrice;
  return {
    salePrice: +(salePrice.toFixed(2)),
    actualDiscountPercent: +(actualDiscountPercent.toFixed(1)),
    savings: +(savings.toFixed(2))
  };
}
```

```js
// Component: returns a DOM element (mounts once; internal mutable state)
function markdownCalculator() {
  const state = {
    discount: 30, // default
    calculations: []
  };

  const $ = (sel, ctx = root) => ctx.querySelector(sel);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html !== undefined) n.innerHTML = html; return n; };

  const root = el('div', 'mc-container card');
  root.innerHTML = `
    <div class="mc-header">
      <h2>🥾 Markdown Calculator</h2>
      <p class="mc-sub">Hiking Shop Pricing Tool</p>
    </div>
    <div class="mc-config">
      <label class="mc-label">Discount (%)</label>
      <div class="mc-config-row">
        <input type="number" class="mc-input" id="mc-discount" min="1" max="90" step="1" value="${state.discount}">
        <button class="mc-btn mc-btn-outline" id="mc-set">Set</button>
        <button class="mc-btn mc-btn-warn" id="mc-reset-session" title="Reset session & history">Reset</button>
      </div>
      <div class="mc-session-info" id="mc-session-info"></div>
    </div>
    <div class="mc-entry">
      <label class="mc-label">Original Price ($)</label>
      <div class="mc-entry-row">
        <input type="number" class="mc-input" id="mc-price" placeholder="e.g. 99.99" min="0.01" step="0.01">
        <button class="mc-btn" id="mc-calc">Calc</button>
      </div>
    </div>
    <div class="mc-result" id="mc-result" hidden>
      <div class="mc-result-price" id="mc-result-price"></div>
      <div class="mc-result-savings" id="mc-result-savings"></div>
    </div>
    <div class="mc-history" id="mc-history">
      <div class="mc-history-head">
        <h3>History</h3>
        <button class="mc-btn mc-btn-small mc-btn-outline" id="mc-clear-history" title="Clear calculation history">Clear</button>
      </div>
      <div class="mc-history-list" id="mc-history-list"></div>
    </div>`;

  function updateSessionInfo() {
    $('#mc-session-info').textContent = `${state.discount}% Off Session`;
  }

  function renderHistory() {
    const list = $('#mc-history-list');
    list.innerHTML = '';
    [...state.calculations].reverse().forEach(c => {
      const row = el('div', 'mc-h-item');
      row.innerHTML = `
        <div>
          <span class="mc-h-orig">$${c.original.toFixed(2)}</span>
          <span class="mc-h-arrow">→</span>
          <span class="mc-h-sale">$${c.sale.toFixed(2)}</span>
        </div>
        <div class="mc-h-discount">${c.actualDiscountPercent.toFixed(1)}% off</div>`;
      list.appendChild(row);
    });
  }

  function showResult(r) {
    $('#mc-result-price').textContent = `$${r.salePrice.toFixed(2)}`;
    $('#mc-result-savings').textContent = `Save $${r.savings.toFixed(2)} (${r.actualDiscountPercent}% off)`;
    $('#mc-result').hidden = false;
  }

  function calculateFromInput() {
    const priceEl = $('#mc-price');
    const v = parseFloat(priceEl.value);
    if (!v || v <= 0) { priceEl.focus(); return; }
    const r = calculateMarkdown(v, state.discount);
    state.calculations.push({
      original: v,
      sale: r.salePrice,
      actualDiscountPercent: r.actualDiscountPercent,
      savings: r.savings
    });
    showResult(r);
    renderHistory();
    priceEl.value = '';
    priceEl.focus();
  }

  // Event wiring
  $('#mc-set').addEventListener('click', () => {
    const d = parseFloat($('#mc-discount').value);
    if (!d || d <= 0 || d >= 100) return;
    state.discount = d;
    updateSessionInfo();
  });
  $('#mc-reset-session').addEventListener('click', () => {
    state.calculations = [];
    updateSessionInfo();
    renderHistory();
    $('#mc-result').hidden = true;
    $('#mc-price').value = '';
    $('#mc-price').focus();
  });
  $('#mc-calc').addEventListener('click', calculateFromInput);
  $('#mc-price').addEventListener('keypress', e => e.key === 'Enter' && calculateFromInput());
  $('#mc-discount').addEventListener('keypress', e => e.key === 'Enter' && $('#mc-set').click());
  $('#mc-clear-history').addEventListener('click', () => { state.calculations = []; renderHistory(); });

  // Initial
  updateSessionInfo();
  renderHistory();
  setTimeout(() => $('#mc-price').focus(), 0);

  return root;
}
```

```js
// Display the calculator component
markdownCalculator()
```

<style>
/* Container & layout */
.mc-container {
  max-width: 480px;
  margin: 1rem auto 3rem;
  background: linear-gradient(145deg,#2c5530 0%,#1d3e22 100%);
  color: #f3f8f3;
  border-radius: 20px;
  padding: 1.75rem 1.5rem 2rem;
  box-shadow: 0 10px 30px -5px rgba(0,0,0,0.45);
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,system-ui,sans-serif;
}
.mc-header h2 { margin: 0 0 .25rem; font-size: 1.4rem; font-weight: 700; color:#a8d4ab; }
.mc-sub { margin: 0 0 1.25rem; font-size:.9rem; opacity:.85; }
.mc-label { font-size:.8rem; text-transform:uppercase; letter-spacing:.08em; font-weight:600; opacity:.85; margin-bottom:.4rem; display:block; }

.mc-config-row, .mc-entry-row { display:flex; gap:.5rem; align-items:center; }
.mc-input { flex:1; padding:.85rem .9rem; font-size:1rem; border:2px solid rgba(255,255,255,0.18); background:rgba(255,255,255,0.12); color:#fff; border-radius:12px; outline:none; transition:.2s; }
.mc-input:focus { border-color:#a8d4ab; background:rgba(255,255,255,0.18); }

.mc-btn { cursor:pointer; border:none; border-radius:12px; padding:.85rem 1.1rem; font-weight:600; font-size:.9rem; background:linear-gradient(135deg,#4CAF50,#3f9c44); color:#fff; box-shadow:0 2px 6px -1px rgba(0,0,0,.4); transition:.18s; }
.mc-btn:hover { transform:translateY(-2px); box-shadow:0 6px 18px -4px rgba(0,0,0,.5); }
.mc-btn:active { transform:translateY(0); box-shadow:0 2px 6px -1px rgba(0,0,0,.4); }
.mc-btn-outline { background:rgba(255,255,255,0.12); backdrop-filter:blur(4px); }
.mc-btn-outline:hover { background:rgba(255,255,255,0.18); }
.mc-btn-warn { background:linear-gradient(135deg,#ff6b6b,#e94a4a); }
.mc-btn-small { padding:.5rem .75rem; font-size:.7rem; }

.mc-session-info { margin-top:.6rem; font-weight:600; text-align:center; background:rgba(255,255,255,0.12); padding:.5rem .75rem; border-radius:10px; font-size:.8rem; letter-spacing:.05em; }

.mc-result { margin:1.25rem 0 1.5rem; text-align:center; background:rgba(76,175,80,0.18); padding:1.1rem 1rem 1.2rem; border:1px solid rgba(168,212,171,0.4); border-radius:16px; animation:fadeIn .35s ease; }
.mc-result-price { font-size:2.1rem; font-weight:800; color:#a8d4ab; margin:0 0 .3rem; letter-spacing:.5px; }
.mc-result-savings { font-size:.95rem; opacity:.9; }

.mc-history { margin-top:1.5rem; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,.15); padding:1rem .9rem 1.1rem; border-radius:16px; max-height:320px; display:flex; flex-direction:column; }
.mc-history-head { display:flex; justify-content:space-between; align-items:center; margin:0 0 .6rem; }
.mc-history-head h3 { margin:0; font-size:.95rem; text-transform:uppercase; letter-spacing:.08em; font-weight:700; color:#a8d4ab; }
.mc-history-list { overflow-y:auto; scrollbar-width:thin; scrollbar-color:rgba(255,255,255,0.3) transparent; font-size:.85rem; line-height:1.2; }
.mc-history-list::-webkit-scrollbar { width:6px; }
.mc-history-list::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.35); border-radius:6px; }
.mc-h-item { display:flex; justify-content:space-between; align-items:center; padding:.55rem .55rem; background:rgba(255,255,255,0.1); border-radius:10px; margin-bottom:.45rem; }
.mc-h-item:last-child { margin-bottom:0; }
.mc-h-orig { text-decoration:line-through; color:#ffcccb; margin-right:.4rem; }
.mc-h-sale { color:#a8d4ab; font-weight:700; }
.mc-h-arrow { margin:0 .25rem; opacity:.5; }
.mc-h-discount { font-size:.7rem; opacity:.85; font-weight:600; letter-spacing:.05em; }

@keyframes fadeIn { from { opacity:0; transform:translateY(4px);} to { opacity:1; transform:translateY(0);} }

@media (max-width:560px) {
  .mc-container { margin: .5rem .75rem 2.5rem; padding:1.25rem 1.05rem 1.6rem; }
  .mc-result-price { font-size:1.8rem; }
}
</style>

---
### Notes
* This component is self-contained; no external libraries required.
* To adapt pricing logic (e.g. end in .97 instead of .99), modify `calculateMarkdown`.
* Offline/PWA service worker from the original file was removed for simplicity; can be reintroduced via a custom integration if needed.
