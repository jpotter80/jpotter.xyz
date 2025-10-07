import "dotenv/config";

// Check if we already fetched today's APOD by checking the date
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// Get API key from environment variable
const API_KEY = process.env.NASA_API_KEY;
if (!API_KEY) {
  throw new Error("NASA_API_KEY environment variable is required");
}

async function json(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return await response.json();
}

function timeout(ms) {
  return new Promise((_, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error("Timeout"));
    }, ms);
  });
}

async function fetchWithRetry(url, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const controller = new AbortController();
      const signal = controller.signal;
      const pending = fetch(url, { signal });
      const response = await Promise.race([pending, timeout(5000).then(() => controller.abort())]);
      if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
      return await response.json();
    } catch (err) {
      if (attempt === retries) throw err;
    }
  }
}

async function fetchApod(dateStr) {
  const API_KEY = process.env.NASA_API_KEY;
  if (!API_KEY) throw new Error("NASA_API_KEY environment variable is required");
  const url = new URL("https://api.nasa.gov/planetary/apod");
  url.searchParams.append("api_key", API_KEY);
  url.searchParams.append("date", dateStr);
  url.searchParams.append("thumbs", "true");
  
  return fetchWithRetry(url.toString());
}

let apod;
try {
  apod = await fetchApod(today);
} catch (err) {
  if (err.message.includes("404")) {
    // One-day fallback
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const fallback = yesterday.toISOString().split("T")[0];
    apod = await fetchApod(fallback);
    apod._fallbackFrom = today;
  } else {
    throw err;
  }
}

apod._fetchedAt = today;
process.stdout.write(JSON.stringify(apod));
