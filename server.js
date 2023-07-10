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

// Aktiviert CORS nur für lokale Routen.
app.use(cors({
    // Erlaubt Anfragen nur von diesen Quelle
    origin: function (origin, callback) {
        console.log('CORS origin:', origin);
         if (['http://127.0.0.1:3000', 'http://localhost:3000'].indexOf(origin) !== -1) {
            callback(null, true)
         } else {
             callback(new Error('Nicht erlaubt durch CORS'))
        }
    }
}));

app.use(express.json()); // for parsing application/json

// Definiert eine Route für die Startseite ('/').
// Wenn der Benutzer die Website ohne spezifischen Pfad aufruft, senden wir 'index.html'.
let fileToDeliver = "index.html";
app.get('/', (req, res) => {
    console.log('User called website without path, Deliver index.html');

    // sendFile liefert die angegebene Datei an den Client. 
    // __dirname ist das Verzeichnis, in dem das aktuelle Skript liegt.
    res.sendFile(`${__dirname}/public/${fileToDeliver}`);
});

let calledPath = '/one-player';
fileToDeliver = "index.html";
app.get(calledPath, (req, res) => {
    console.log(`User called Website with path ${calledPath}. We deliver ${fileToDeliver}`);
    res.sendFile(`${__dirname}/public/${fileToDeliver}`);
});

// ergänze ein post Route für saveMatchResult
app.post('/saveMatchResult', (req, res) => {
    console.log(`User called Server with path . We save a match result to the database`);
});

// Startet den Server und lässt ihn auf dem definierten Port lauschen.
app.listen(port, hostIP, () => {
    console.log(`Der Server ist unter http://${hostIP}:${port} erreichbar.`);
});
