"use strict";

// Name of this file: wordsworm.js

// Express-Modul für Webanwendungen.
import express from 'express';

// Pfade des Dateisystems bereitstellen
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// CORS-Modul. Erlaubt Anfragen von anderen Domains.
import cors from 'cors';

// Funktionen zum Erstellen und Speichern von Match-Ergebnissen.
import { createMatchResult } from './matchResultUtils.js';
import { saveMatchResultToDB } from './save-match-result-to-couch-db.js';

// Importieren der Funktion zum Abrufen von Match-Ergebnissen.
import { fetchMatchResultsWithHighestScores } from './fetch-match-results-module.mjs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialisiert eine Express-App.
const app = express();
const hostIP = '127.0.0.1';
const port = 3000;

// Middleware zur Bereitstellung von statischen Dateien.
// Alles in 'public' wird direkt zugänglich sein.
app.use(express.static('public'));

// Aktiviert CORS für alle Routen.
app.use(cors());

app.use(express.json()); // for parsing application/json

let fileToDeliver = "index.html";
let calledPath = '/one-player';
app.get(calledPath, (req, res) => {
    console.log(`User called Website with path ${calledPath}. We deliver ${fileToDeliver}`);
    res.sendFile(`${__dirname}/public/${fileToDeliver}`);
});

// Match-Ergebnisse speichern
app.post('/saveMatchResult', (req, res) => {
    // Erstellen des MatchResult-Objekts mit der createMatchResult Funktion
    let matchResult = createMatchResult(req.body);

    // Speichern des MatchResult in der Datenbank
    saveMatchResultToDB(matchResult)
        .then(response => {
            console.log('Match-Ergebnis erfolgreich in CouchDB gespeichert.', response);
            // Senden einer Erfolgsmeldung zurück an den Client
            res.json({ message: 'Match-Ergebnisse erfolgreich gespeichert.' });
        })
        .catch(err => {
            console.error('Fehler beim Speichern des Match-Ergebnisses in CouchDB.', err);
            // Senden einer Fehlermeldung zurück an den Client
            res.status(500).json({ message: 'Fehler beim Speichern des Match-Ergebnisses.' });
        });
});

// Route für das Abrufen der Highscores
app.get('/highscores', async (req, res) => {
    try {
        // Abrufen der Highscores
        const highScores = await fetchMatchResultsWithHighestScores();

        // Senden der Highscores als Antwort
        res.json(highScores);
    } catch (err) {
        console.error("Fehler beim Abrufen der Highscores:", err);

        // Senden einer Fehlermeldung als Antwort
        res.status(500).json({ message: 'Fehler beim Abrufen der Highscores.' });
    }
});

// Startet den Server und lässt ihn auf dem definierten Port lauschen.
app.listen(port, hostIP, () => {
    console.log(`Der Server ist unter http://${hostIP}:${port} erreichbar.`);
});
