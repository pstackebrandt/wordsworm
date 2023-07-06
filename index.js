// Required for capturing user input
const readline = require('readline');

class Wordworm {
    constructor() {
        // Array to store all the words given by the player, initial word is 'Anfang'
        this.words = ['Anfang'];
        // Player name
        this.player = 'Player 1';
        // Variable to count the number of consecutive empty inputs
        this.emptyInputCount = 0;
        // Creating readline interface for user input
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    
    // Function to return the last letter of a word
    getLastLetter = (word) => {
        return word[word.length - 1];
    }
    
    // Function to check if the given word is valid
    checkWord = (word) => {
        // Get the last word from the words list
        const lastWord = this.words[this.words.length - 1];
        // Check if the new word starts with the last letter of the last word
        if (this.getLastLetter(lastWord) !== word[0]) {
            return false;
        }
        
        // Check if the word has already been said
        if (this.words.includes(word)) {
            return false;
        }

        // If it passes the above conditions, the word is valid
        return true;
    }

    // Function to add a word to the list
    addWord = (word) => {
        // If the input is empty, increment the empty input counter
        if (word.trim().length === 0) {
            this.emptyInputCount++;
            // If we've had 2 consecutive empty inputs, end the game
            if (this.emptyInputCount >= 2) {
                console.log(`Das Spiel ist vorbei, danke fürs Spielen! Sie haben ${this.words.length - 1} Punkte erzielt.`);
                this.rl.close();
                return;
            }
        } else {
            // If input is not empty, reset the counter and check if the word is valid
            this.emptyInputCount = 0;
            if (this.checkWord(word)) {
                this.words.push(word);
                console.log("Bravo! Das war richtig!");
            } else {
                console.log("Sorry, dieses Wort ist ungültig. Versuchen Sie es erneut.");
            }
        }
        // Continue the game
        this.play();
    }

    // Function to print all the words
    printWords = () => {
        console.log("Die bisherigen Wörter sind: ", this.words.join(", "));
    }

    // Main function to start and manage the game
    play = () => {
        // Ask player for the next word
        this.rl.question(`"${this.player}" nenne das nächste Wort! Es muss mit dem Buchstaben "${this.getLastLetter(this.words[this.words.length - 1])}" beginnen.\n`, (answer) => {
            // Add the word given by the player to the list
            this.addWord(answer);
            // Print all words
            this.printWords();
        });
    }
}

// Create a new game instance
let spiel = new Wordworm();
// Start the game
spiel.play();
