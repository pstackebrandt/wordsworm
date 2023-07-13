// file name: fetch-match-results-module.mjs

// Import the nano library, a minimalistic CouchDB driver for Node.js.
import { default as Nano } from 'nano';

// CouchDB credentials for logging in
const username = 'admin';
const password = 'asy';

// Replace 'localhost:5984' with the actual address and port of your CouchDB instance.
const nano = Nano(`http://${username}:${password}@127.0.0.1:5984`);
const db = nano.db.use('wordsworm');

// Define a function to fetch view results
const fetchMatchResultsWithHighestScores = async () => {
  try {
    // Fetch the first 10 results from the view 'by_score_and_name' 
    // in the design document 'teams', in ascending order.
    const response = await db.view('teams', 'by_score_and_name', { limit: 10, descending: false });

    // Return the fetched results.
    return response.rows;
  } catch (err) {
    // If there was an error fetching the results, log it.
    console.error("Error fetching results from view:", err);
  }
};

// Export the function as a module
export { fetchMatchResultsWithHighestScores as fetchMatchResultsWithHighestScores };
