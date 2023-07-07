"use strict";  // Aktiviert den Strict-Mode für JavaScript, um sicherzustellen, dass der Code in einer "sicheren" Umgebung ausgeführt wird.

// Name of this file: wordsworm.js

// Importiert das Express-Modul für Webanwendungen.
import express from 'express';
// Initialisiert eine Express-App.
const app = express();
// Definiert den Port, auf dem der Server lauschen wird.
const port = 3000;

// Middleware zur Bereitstellung von statischen Dateien.
// Alles in 'public' wird direkt zugänglich sein.
app.use(express.static('public'));

// Definiert eine Route für die Startseite ('/').
// Wenn der Benutzer die Website ohne spezifischen Pfad aufruft, senden wir 'index.html'.
app.get('/', (req, res) => {
    console.log('User called website without path, We deliver index.html');
    // sendFile liefert die angegebene Datei an den Client. __dirname ist das Verzeichnis, in dem das aktuelle Skript liegt.
    res.sendFile(`${__dirname}/public/index.html`);
});

// Pfad und Datei zum Senden für einen bestimmten Anforderungspfad definieren.
let calledPath = '/one-player';
let fileToDeliver = "index.html";
// Eine Route für 'calledPath' definieren.
app.get(calledPath, (req, res) => {
    console.log(`User called Website with path ${calledPath}. We deliver ${fileToDeliver}`);
    // Sendet die angegebene Datei für Anfragen an 'calledPath'.
    res.sendFile(`${__dirname}/public/${fileToDeliver}`);
});

// Startet den Server und lässt ihn auf dem definierten Port lauschen.
app.listen(port, () => {
  console.log(`Der Server ist unter http://localhost:${port} erreichbar.`);
});
