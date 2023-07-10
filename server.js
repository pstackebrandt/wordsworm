"use strict";  // Aktiviert den Strict-Mode für JavaScript, um sicherzustellen, dass der Code in einer "sicheren" Umgebung ausgeführt wird.

// Name of this file: wordsworm.js

// Express-Modul für Webanwendungen.
import express from 'express';

// Pfade des Dateisystems bereitstellen
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialisiert eine Express-App.
const app = express();
const port = 3000;

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

// Middleware zur Bereitstellung von statischen Dateien.
// Alles in 'public' wird direkt zugänglich sein.
// Wenn ein direkter Abruf eines Files manuell bearbeitet werden soll,
// muss er vor dieser Zeile stehen.
app.use(express.static('public'));

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
app.listen(port, () => {
  console.log(`Der Server ist unter http://localhost:${port} erreichbar.`);
});
