# Wörterwurm / Wordsworm
Wörterwurm ist ein einfaches, aber fesselndes Text-basiertes Spiel, das in der Konsole gespielt wird.
Das Konsolen-Spiel ist eine erste besonders einfache Variante des Spiels. Es wird nicht an das sich weiter entwickelnde Webseiten-Spiel angepasst.

## Hinweis zur Übersetzung
Das File wird am Ende des Projekts einheitlich übersetzt. 

## Getting Started

To start the server and access the client application, follow the steps below:

### Prerequisites

- Node.js (version >= 10) must be installed on your machine.

### Installation

1. Clone this repository to your local machine.

2. Open a command line or terminal and navigate to the project's root directory.

3. Run the following command to install the required dependencies:

   ```shell
   npm install
   ```

### Starting the Server

1. Make sure you are still in the project's root directory in the command line or terminal.

2. Run the following command to start the server:

   ```shell
   npm start
   ```

   The server will be started and will listen for incoming connections.

### Accessing the Client

1. Open your preferred web browser (e.g., Google Chrome, Mozilla Firefox).

2. Enter the following URL in the browser's address bar and press Enter:

   ```
   http://localhost:3000
   ```

   This will connect to the local server and load the client application in your browser.

   **Note:** Ensure that the server is running before accessing the client. Otherwise, the client application will not be able to establish a connection.


### Datbase
Create a local Couch DB wordsworm with admin and password asy.
Install a view by using setup-db-views.js. Run script with node.js.

## Issues and Feedback

If you encounter any issues or have any feedback, please [open an issue](https://github.com/pstackebrandt/wordsworm/issues) on the GitHub repository.

---

**Author:** Peter Stackebrandt  
**License:** ISC
```

## Spielregeln und Ablauf

1. **Spielstart**: Beim Start des Spiels wird das erste Wort, "Anfang", vom System festgelegt und ausgegeben.

2. **Spielername**: Es gibt nur einen Spieler, genannt "Player 1".

3. **Spielablauf**: Das System fordert den Spieler auf, das nächste Wort einzugeben. Das Wort muss mit dem Buchstaben beginnen, mit dem das vorherige Wort endet. Groß- und Kleinschreibung werden nicht berücksichtigt, sodass "Apfel" und "apfel" als dasselbe Wort angesehen werden.

4. **Wortprüfung**: Das System prüft, ob das eingegebene Wort gültig ist. Ein Wort ist gültig, wenn es mit dem letzten Buchstaben des vorherigen Wortes beginnt und noch nicht in der bisherigen Wortliste aufgeführt ist. 

5. **Spielverlauf**: Bei einer erfolgreichen Wortfindung fügt das System das Wort zur Wortliste hinzu und gratuliert dem Spieler. Wenn das Wort ungültig ist, fordert das System den Spieler auf, es erneut zu versuchen.

6. **Spielende**: Das Spiel endet, wenn der Spieler zweimal hintereinander keine Eingabe tätigt. Das System berechnet die Punkte des Spielers, die sich aus der Anzahl der gefundenen Wörter ergeben, und gibt sie aus.

# Technisches
Wörterwurm für Konsole wurde in JavaScript ES6 geschrieben und nutzt die eingebaute 'readline'-Bibliothek von Node.js, um Eingaben von der Konsole einzulesen.


## Weitere Dokumente

Für eine detaillierte Erklärung der `package.json`-Datei, sehen Sie bitte die [Package-Dokumentation](./PACKAGE.md).


## Zukunftsausblick

Insgesamt ist "Wörterwurm" ein einfaches, aber unterhaltsames Spiel, das die Wortkenntnisse der Spieler herausfordert und erweitert. Es hat das Potenzial für weitere Verbesserungen und Erweiterungen, wie zum Beispiel die Hinzufügung von mehreren Spielern, Zeiteinschränkungen oder speziellen Punkteregeln.
