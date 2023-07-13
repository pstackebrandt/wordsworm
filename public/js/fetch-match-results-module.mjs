// file name: fetch-match-results-module.mjs

// Import the nano library, a minimalistic CouchDB driver for Node.js.
import { default as Nano } from 'nano';

// CouchDB credentials for logging in
const username = 'admin';
const password = 'asy';

// Replace 'localhost:5984' with the actual address and port of your CouchDB instance.
const nano = Nano(`http://${username}:${password}@127.0.0.1:5984`);
const db = nano.db.use('wordsworm');

// // Define a function to fetch view results
// const fetchViewResults = async () => {
//   try {
//     // Fetch the first 10 results from the view 'by_score_and_name' 
//     // in the design document 'teams', in ascending order.
//     const response = await db.view('teams', 'by_score_and_name', { limit: 10, descending: false });

//     // Log the fetched results.
//     console.log("Fetched results from view:", response.rows);
//   } catch (err) {
//     // If there was an error fetching the results, log it.
//     console.error("Error fetching results from view:", err);
//   }
// };

async function fetchViewResults() {
  const response = await fetch("http://127.0.0.1:3000/nano");
  if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

// Export the function as a module
export { fetchViewResults };
