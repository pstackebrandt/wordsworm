'use strict'; // Aktivieren Sie den strengen Modus

// Name of this file: wordsworm.js

// Definiere Spielklasse
class WordwormGame {
    constructor() {
        this.words = ["Anfang"]; // Initialisiere das Wörter-Array mit dem Startwort
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

    // Add function sendMatchResultToServer()
    sendMatchResultToServer = () => {
        console.log('sendMatchResultToServer() called');
        const url = 'http://127.0.0.1:3000/saveMatchResult';
        const data = {
            team: 'Team 1',
            words: game.getWords(),
            score: game.getWords().length - 1
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

// Erstelle ein neues Spiel
let game = new WordwormGame();

// Referenzen auf HTML-Elemente
const gameArea = document.querySelector("#gameArea");

// Initialisiere das Spiel
initializeGame();

function initializeGame() {
    let emptyInputs = 0;  // Zähler für leere Eingaben
    const input = document.createElement('input');
    const button = document.createElement('button');
    button.textContent = 'Wort hinzufügen';

    button.addEventListener('click', () => {
        const word = input.value;
        if (word === '') {
            emptyInputs++;
        } else {
            emptyInputs = 0;
            if (game.checkWord(word)) {
                game.addWord(word);
            }
        }
        input.value = '';
        if (emptyInputs < 2) {
            updateGameArea();
        } else {
            endGame();
        }
    });

    gameArea.append(input, button);
    updateGameArea();
}

// Aktualisiere die Spielanzeige
function updateGameArea() {
    const oldWordList = gameArea.querySelector('ul');
    if (oldWordList) {
        oldWordList.remove();
    }
    const wordList = document.createElement('ul');
    game.getWords().forEach(word => {
        const listItem = document.createElement('li');
        listItem.textContent = word;
        wordList.append(listItem);
    });
    gameArea.append(wordList);
}

// Beende das Spiel und zeige die Punktzahl
function endGame() {
    gameArea.innerHTML = `<p>Spiel beendet. Du hast ${game.getWords().length - 1} Punkte erreicht!</p>`;
    game.sendMatchResultToServer();
}
