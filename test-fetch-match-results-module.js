// file name: test-fetch-match-results-module.js

// Import the fetchViewResults function from the module.
import { fetchViewResults } from './fetch-match-results-module.mjs';

console.log("Fetching view results...");

// Call the function and log the results.
fetchViewResults().then(() => {
  console.log("Fetched view results successfully.");
}).catch((err) => {
  console.error("Error occurred while fetching view results:", err);
});
