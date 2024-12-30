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

// Construct URL with today's date explicitly
const url = new URL("https://api.nasa.gov/planetary/apod");
url.searchParams.append("api_key", API_KEY);
url.searchParams.append("date", today);
url.searchParams.append("thumbs", "true");

const apod = await json(url.toString());

// Add a timestamp to the data for cache validation
const data = {
  ...apod,
  _fetchedAt: today,
};

process.stdout.write(JSON.stringify(data));
