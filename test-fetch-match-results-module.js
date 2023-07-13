// file name: test-fetch-match-results-module.js

import { fetchMatchResultsWithHighestScores } from './fetch-match-results-module.mjs';

console.log("Fetching view results...");

// Call the function and log the results.
fetchMatchResultsWithHighestScores().then(() => {
  console.log("Fetched view results successfully.");
}).catch((err) => {
  console.error("Error occurred while fetching view results:", err);
});
