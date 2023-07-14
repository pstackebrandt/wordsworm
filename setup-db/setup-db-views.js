// file name: setup-db-views.js

// Import the nano library, a minimalistic CouchDB driver for Node.js.
import { default as Nano } from 'nano';

// Credentials for logging into Couch
const username = 'admin';
const password = 'asy';
const dbName = 'wordsworm';

// Create a connection to your CouchDB instance.
const nano = Nano(`http://${username}:${password}@127.0.0.1:5984`);

// Select the 'wordsworm' database in your CouchDB instance.
const db = nano.db.use(dbName);

// Define the design document for the 'teams' view.
const designDoc = {
  "_id": "_design/teams",
  "views": {
    "by_score_and_name": {
      // Map function for the view: emit teamScore (as a padded string) and teamName as key, other needed fields as value.
      "map": `(doc) => { var teamScoreStr = ('0000' + doc.teamScore).slice(-4); emit([teamScoreStr, doc.teamName], {teamName: doc.teamName, teamScore: doc.teamScore, foundWords: doc.foundWords, _id: doc._id, _rev: doc._rev}) }`
    }
    // You can add more views here.
  }
};

// Asynchronous function to create or update the view.
const createOrUpdateView = async () => {
  try {
    // Try to get the existing design document.
    const existing = await db.get('_design/teams');

    // If the design document exists, add the _rev property to overwrite it.
    designDoc._rev = existing._rev;
  } catch (err) {
    if (err.statusCode === 404) {
      // If the design document does not exist, log it and continue to create it.
      console.log('Design document does not exist yet, creating it.');
    } else {
      // If there was an error fetching the design document, log it and stop the execution.
      console.error('Error fetching design document:', err);
      throw err;
    }
  }

  try {
    // Try to create or update the design document.
    const response = await db.insert(designDoc);

    // If the operation was successful, log it.
    console.log("Design document successfully created or updated!", response);
  } catch (err) {
    // If there was an error creating or updating the design document, log it.
    console.error("Error creating or updating the design document:", err);
  }
}

// Run the function to create or update the view.
createOrUpdateView();
