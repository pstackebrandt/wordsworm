// file name: save-match-result-to-couch-db.js

import nano from 'nano';

// Credentials für die Anmeldung in Couch
const username = 'admin';
const password = 'asy';
const dbName = 'wordsworm';

// Verbindung zu Couch herstellen
const db = nano(`http://${username}:${password}@127.0.0.1:5984`).db.use(dbName);

// Die Funktion, um MatchResult in die Datenbank zu speichern
export const saveMatchResultToDB = (matchResult) => {
  return db.insert(matchResult)
    .then(response => {
      console.log('Insertion response:', response);
      return response;
    })
    .catch(err => {
      console.error('Fehler beim Speichern des Match-Ergebnisses in CouchDB:', err);
      throw err;
    });
};
