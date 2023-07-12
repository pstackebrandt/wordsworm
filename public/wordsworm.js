'use strict'; // Aktivieren Sie den strengen Modus

// file: wordsworm.js

document.addEventListener("DOMContentLoaded", (event) => {
    // References to HTML elements
    const currentTeamNameDisplay = document.querySelector("#currentTeamNameDisplay");
    const gameArea = document.querySelector("#gameArea");
    const teamChangeArea = document.querySelector("#teamChangeArea");

    // Erstelle ein neues Spiel
    let game = new WordswormGame();

    // Initialisiere das Spiel
    initializeGame(game, currentTeamNameDisplay, gameArea, teamChangeArea);
});

// Definiere Spielklasse
class WordswormGame {
    constructor() {
        //this.words = ["Anfang"]; // Initialisiere das Wörter-Array mit dem Startwort
        this.words = ["Anfang", "Gans", "Sau", "Ulme", "Emil", "Lupe", "Esel", "Lust"]; // dummy values for testing

        this.teamName = "Elfe Hannah";  // Initialize team name
    }

    // Prüfe, ob das Wort gültig ist
    checkWord(word) {
        const lastWord = this.words[this.words.length - 1];
        // Das Wort ist gültig, wenn es noch nicht verwendet wurde und der erste Buchstabe dem letzten Buchstaben des vorherigen Wortes entspricht
        return !this.words.includes(word) && lastWord[lastWord.length - 1].toLowerCase() === word[0].toLowerCase();
    }

    // Füge das Wort dem Array hinzu
    addWord(word) {
        this.words.push(word);
    }

    // Gib die Wörter zurück
    getWords() {
        return this.words;
    }

    changeTeamName(newName) {
        this.teamName = newName;
    }

    // Add function sendMatchResultToServer()
    sendMatchResultToServer = () => {
        console.log('sendMatchResultToServer() called');
        const url = 'http://127.0.0.1:3000/saveMatchResult';
        const data = {
            teamName: this.teamName,
            foundWords: this.getWords(),
            teamScore: this.getWords().length - 1
        };

        console.log('sendMatchResultToServer() sends data:', JSON.stringify(data));

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Match result sent to server:', data);
            })
            .catch(error => {
                console.error('Error sending match result to server:', error);
            });
    }
}

// Initialisiert das Spiel und erstellt die Spieloberfläche
const initializeGame = (game, currentTeamNameDisplay, gameArea, teamChangeArea) => {
    // Anzeigen des aktuellen Teamnamens und Option zur Änderung
    displayCurrentTeamName(game, currentTeamNameDisplay);
    displayTeamNameChangeOption(game, teamChangeArea, currentTeamNameDisplay);

    let emptyInputs = 0;  // Zähler für leere Eingaben

    // Erstellung des Eingabe- und Schaltflächenelements
    const wordInput = document.getElementById('wordInput');
    const addWordBtn = document.getElementById('addWordButton');

    // Funktion zur Behandlung der Wortübermittlung
    const submitWord = () => {
        const word = wordInput.value;
        if (word === '') {
            emptyInputs++;
        } else {
            emptyInputs = 0;
            if (game.checkWord(word)) {
                game.addWord(word);
            }
        }
        wordInput.value = '';

        // Aktualisierung des Spielbereichs oder Beendigung des Spiels bei zu vielen leeren Eingaben
        if (emptyInputs < 2) {
            updateGameArea(game, gameArea);
        } else {
            endGame(game, gameArea);
        }
    };

    // Eventlistener für Button-Klick
    addWordBtn.addEventListener('click', submitWord);

    // Eventlistener für Enter-Taste im Eingabefeld
    wordInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitWord();
        }
    });

    // Hinzufügen der Eingabe und der Schaltfläche zur Eingabebereich der Webseite
    //document.querySelector("#wordInputArea").append(container);

    // Aktualisieren der Wortliste beim Initialisieren
    updateGameArea(game, gameArea);
}

function displayCurrentTeamName(game, currentTeamNameDisplay) {
    // Update the displayed team name
    currentTeamNameDisplay.textContent = `Team: ${game.teamName}`;
}

function displayTeamNameChangeOption(game, teamChangeArea, currentTeamNameDisplay) {
    // Clear the previous content
    teamChangeArea.innerHTML = '';

    // Add input and button to change team name
    const teamNameInput = document.createElement('input');
    const changeTeamNameButton = document.createElement('button');
    changeTeamNameButton.textContent = 'Teamname ändern';

    const changeTeamName = () => {
        const newTeamName = teamNameInput.value;
        if (newTeamName !== '') {
            game.changeTeamName(newTeamName);
            // Update the displayed team name
            displayCurrentTeamName(game, currentTeamNameDisplay);
        }
    };

    changeTeamNameButton.addEventListener('click', changeTeamName);

    // Event listener for Enter key in input field
    teamNameInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            changeTeamName();
        }
    });

    teamChangeArea.append(teamNameInput, changeTeamNameButton);
}

// Aktualisiert den Spielbereich mit der aktuellen Liste der Worte
const updateGameArea = (game, gameArea) => {
    const wordList = document.querySelector("#wordList");
    wordList.innerHTML = ""; // Löscht den vorherigen Inhalt der Wortliste

    game.getWords().forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.textContent = word;
        wordItem.classList.add("word-item");
        wordList.append(wordItem);
    });
}

// Beende das Spiel und zeige die Punktzahl
function endGame(game, gameArea) {
    gameArea.innerHTML = `<p>Spiel beendet. Du hast ${game.getWords().length - 1} Punkte erreicht!</p>`;
    game.sendMatchResultToServer();
}
