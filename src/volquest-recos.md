---
theme: [deep-space, wide]
title: Volquest Recommendations
---

# Volquest Recos

```js
import * as Plot from "npm:@observablehq/plot";
import * as topojson from "npm:topojson-client";
```

```js
// Load the world topology data
const land50m = FileAttachment("./data/land-50m.json").json();
```
```js
// Extract land features for mapping
const land = topojson.feature(land50m, land50m.objects.land);
```
```js
// Load restaurant data
const restaurants = FileAttachment("./data/restaurants_geocoded_complete.csv").csv({typed: true});
```

```js
// Filter to restaurants with valid coordinates
const validRestaurants = restaurants.filter(d => 
  d.Latitude != null && 
  d.Longitude != null && 
  !isNaN(+d.Latitude) && 
  !isNaN(+d.Longitude)
);
```

```js
// Display summary statistics
const totalRestaurants = restaurants.length;
const mappedRestaurants = validRestaurants.length;
const uniqueStates = new Set(validRestaurants.filter(d => d["Original State"]).map(d => d["Original State"])).size;
const uniqueCountries = new Set(validRestaurants.filter(d => d["Original Country"]).map(d => d["Original Country"])).size;
```

## 🗺️ Restaurant Locations Map

Explore restaurants from the Volquest recommendations across the globe:

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">${totalRestaurants}</div>
    <div class="stat-label">Total Restaurants</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">${uniqueStates}</div>
    <div class="stat-label">🗺️ States Represented</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">${uniqueCountries}</div>
    <div class="stat-label">� Countries Represented</div>
  </div>
</div>

<div class="legend">
  <h4>Legend</h4>
  <div class="legend-item">
    <div class="legend-dot restaurant-dot"></div>
    <span>Restaurant-level precision (exact location)</span>
  </div>
  <div class="legend-item">
    <div class="legend-dot city-dot"></div>
    <span>City-level precision (approximate location)</span>
  </div>
</div>

```js
// Create the main restaurant map 
const restaurantMap = Plot.plot({
  projection: "equal-earth",
  width: Math.max(800, width),
  height: Math.max(500, Math.min(width * 0.5, 700)),
  style: "background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);",
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 10,
  marginRight: 10,
  marks: [
    Plot.geo(land, { 
      fill: "#374151", 
      stroke: "#4b5563", 
      strokeWidth: 0.3,
      fillOpacity: 0.8
    }),
    Plot.graticule({ 
      stroke: "#6b7280", 
      strokeOpacity: 0.2,
      strokeDasharray: "2,2"
    }),
    Plot.sphere({ 
      stroke: "#9ca3af", 
      strokeWidth: 1.5,
      fill: "none"
    }),
    Plot.dot(validRestaurants, {
      x: "Longitude",
      y: "Latitude", 
      r: d => d["Precision Level"] === "restaurant" ? 8 : 6,
      fill: d => d["Precision Level"] === "restaurant" ? "#ef4444" : "#f59e0b",
      stroke: d => d["Precision Level"] === "restaurant" ? "#dc2626" : "#d97706",
      strokeWidth: 2,
      fillOpacity: 0.9,
      strokeOpacity: 1,
      title: d => `🍽️ ${d["Restaurant Name"]}
📍 ${d["Original City"]}, ${d["Original State"]} ${d["Original Country"]}
🎯 Precision: ${d["Precision Level"]}
${d["Found Address"] || d["Geocoded Address"] || ""}`,
      filter: d => d["Precision Level"] === "restaurant" ? "drop-shadow(0px 0px 4px rgba(239, 68, 68, 0.8))" : "none"
    })
  ]
});
```

${restaurantMap}

## 🍽️ Restaurant Directory

Browse all mapped restaurants in the searchable table below:

```js
// Create a table with all restaurants
const restaurantTable = Inputs.table(validRestaurants, {
  columns: [
    "Restaurant Name",
    "Original City", 
    "Original State",
    "Original Country",
    "Precision Level",
    "Latitude",
    "Longitude"
  ],
  header: {
    "Restaurant Name": "🍽️ Restaurant",
    "Original City": "🏙️ City",
    "Original State": "🗺️ State", 
    "Original Country": "🌍 Country",
    "Precision Level": "🎯 Precision",
    "Latitude": "📍 Lat",
    "Longitude": "📍 Lng"
  },
  format: {
    "Precision Level": d => d === "restaurant" ? "🎯 Exact" : "🏙️ City",
    "Latitude": d => d ? (+d).toFixed(3) : "—",
    "Longitude": d => d ? (+d).toFixed(3) : "—"
  },
  width: {
    "Restaurant Name": 200,
    "Original City": 120,
    "Original State": 80,
    "Original Country": 100,
    "Precision Level": 100,
    "Latitude": 80,
    "Longitude": 80
  }
});
```

<div class="table-container">
  ${restaurantTable}
</div>



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

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0 8rem;
  font-size: 20px;
  text-wrap: balance;
  color: var(--theme-foreground-muted);
}

/* Map container for full-width display with better responsive sizing */
.map-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  min-height: 400px;
}

.map-container > * {
  margin: 0 auto;
  display: block;
  max-width: 100%;
  height: auto;
}

/* Controls section */
.controls-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 8px;
  border: 1px solid #475569;
  flex-wrap: wrap;
  gap: 1rem;
}

.selection-info {
  color: #cbd5e1;
  font-weight: 500;
  flex: 1;
  min-width: 200px;
}

.clear-button {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.clear-button:hover {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Table container styling with improved responsiveness */
.table-container {
  margin: 2rem 0;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #475569;
  overflow-x: auto;
  max-height: 600px;
  overflow-y: auto;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
  background: transparent;
  min-width: 800px;
}

.table-container th,
.table-container td {
  padding: 0.75rem 0.5rem;
  text-align: left;
  border-bottom: 1px solid #475569;
  color: #e2e8f0;
  white-space: nowrap;
}

.table-container th {
  background: rgba(51, 65, 85, 0.8);
  font-weight: 600;
  color: #7fc8b6;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  position: sticky;
  top: 0;
  z-index: 10;
}

.table-container tr:hover {
  background: rgba(51, 65, 85, 0.3);
}

.table-container input[type="checkbox"] {
  accent-color: #7fc8b6;
  transform: scale(1.2);
}

/* Statistics grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  max-width: 800px;
  width: 100%;
}

.stat-card {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #475569;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: #7fc8b6;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #cbd5e1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

/* Legend styling */
.legend {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid #475569;
  backdrop-filter: blur(10px);
}

.legend h4 {
  margin: 0 0 1rem 0;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-weight: 600;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: #cbd5e1;
}

.legend-item:last-child {
  margin-bottom: 0;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.8rem;
  border: 2px solid;
}

.restaurant-dot {
  background-color: #ef4444;
  border-color: #dc2626;
  box-shadow: 0 0 6px rgba(239, 68, 68, 0.6);
}

.city-dot {
  background-color: #f59e0b;
  border-color: #d97706;
}

/* Statistics grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  max-width: 800px;
  width: 100%;
}

.stat-card {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid #475569;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  color: #7fc8b6;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #cbd5e1;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
}

/* Legend styling */
.legend {
  background: rgba(30, 41, 59, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid #475569;
  backdrop-filter: blur(10px);
}

.legend h4 {
  margin: 0 0 1rem 0;
  color: #e2e8f0;
  font-size: 1.1rem;
  font-weight: 600;
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: #cbd5e1;
}

.legend-item:last-child {
  margin-bottom: 0;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.8rem;
  border: 2px solid;
}

.restaurant-dot {
  background-color: #ef4444;
  border-color: #dc2626;
  box-shadow: 0 0 6px rgba(239, 68, 68, 0.6);
}

.city-dot {
  background-color: #f59e0b;
  border-color: #d97706;
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

/* Table container styling */
.table-container {
  margin: 2rem 0;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #475569;
  overflow-x: auto;
}

.table-container table {
  width: 100%;
  border-collapse: collapse;
  background: transparent;
}

.table-container th,
.table-container td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #475569;
  color: #e2e8f0;
}

.table-container th {
  background: rgba(51, 65, 85, 0.8);
  font-weight: 600;
  color: #7fc8b6;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.table-container tr:hover {
  background: rgba(51, 65, 85, 0.3);
}

/* Responsive adjustments */
@media (min-width: 640px) {
  .hero h1 {
    font-size: 90px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .map-container {
    margin-left: -1rem;
    margin-right: -1rem;
    width: calc(100vw + 2rem);
    left: -1rem;
    min-height: 350px;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .controls-section {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  
  .table-container {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  .table-container th,
  .table-container td {
    padding: 0.5rem 0.25rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .map-container {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    width: calc(100vw + 1rem);
    left: -0.5rem;
    min-height: 300px;
  }
  
  .table-container {
    padding: 0.5rem;
    max-height: 400px;
  }
  
  .table-container table {
    min-width: 600px;
  }
}

/* Large screens optimization */
@media (min-width: 1200px) {
  .map-container {
    min-height: 600px;
  }
}

@media (min-width: 1600px) {
  .map-container {
    min-height: 700px;
  }
}

</style>