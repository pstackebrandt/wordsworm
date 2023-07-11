// file name:  save-match-result-to-couch-db.js

// Credentials für die Anmeldung in Couch
const username = 'admin';
const password = 'asy';
const dbName = 'wordsworm';

const matchResult = {
  // _id wird automatisch generiert
  teamName: 'Team 1',
  foundWords: ["Anna", "Amme", "Emil"],
  teamScore: 2
};

// Verbindung zu Couch herstellen
import nano from 'nano';

const db = nano(`http://${username}:${password}@127.0.0.1:5984`).db;

const init = () => {
  // use() ist die einzige Methode, die kein Promise ist
  let myDB = db.use(dbName);

  myDB
    .insert(matchResult)
    .then(console.log)
    .catch(console.warn);
};

init();

// Vorher DB anlegen!!
// Output: { ok: true, id: xxx, rev: '1-5058ba06b28c9c52139109a1c975f009' }
