"use strict";  // Aktiviert den Strict-Mode für JavaScript, um sicherzustellen, dass der Code in einer "sicheren" Umgebung ausgeführt wird.

// Name of this file: wordsworm.js

// Express-Modul für Webanwendungen.
import express from 'express';

// Pfade des Dateisystems bereitstellen
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Importiert das CORS-Modul.
import cors from 'cors';

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
    console.log('Empfangene Match-Ergebnisse:', req.body);

    console.log(`req.body.team: ${req.body.team}`);
    console.log(`req.body.words: ${req.body.words}`);
    console.log(`req.body.score: ${req.body.score}`);
    // Du könntest die empfangenen Daten hier auch in einer Datenbank speichern.
    // Dies wäre der Codeplatz dafür.

    // Nachdem die Daten gespeichert wurden, sende eine Antwort zurück zum Client.
    res.json({ message: 'Match-Ergebnisse erfolgreich gespeichert.' });
});


// Startet den Server und lässt ihn auf dem definierten Port lauschen.
app.listen(port, hostIP, () => {
    console.log(`Der Server ist unter http://${hostIP}:${port} erreichbar.`);
});
