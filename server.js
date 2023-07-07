// Constants, variables
const express = require('express');
const app = express();
const port = 3000;

// Statische Dateien im "public" Verzeichnis bereitstellen
app.use(express.static('public'));

// Routen für die Startseite definieren
// When user calls website without any path send index.html
app.get('/', (req, res) => {
    console.log('User called website without path, We deliver index.html');
    res.sendFile(__dirname + '/public/index.html');
  });


let calledPath = '/one-player';
let fileToDeliver = "index.html";
app.get(calledPath, (req, res) => {
    console.log(`User called Website with path ${calledPath}. We deliver ${fileToDeliver}`);
    res.sendFile(__dirname + `/public/index.html`);
});

// Server starten
app.listen(port, () => {
  console.log(`Der Server ist unter http://localhost:${port} erreichbar.`);
});