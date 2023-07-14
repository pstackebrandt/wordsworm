// file name: game-end.js

// This script is responsible for displaying team name, word count and team score at the end of the game.
// It also handles the event listeners for the "Start New Game" and "Show High Scores" buttons.

// Event Listener for when the DOM content is loaded.
document.addEventListener("DOMContentLoaded", () => {
    // Querying the necessary elements from the DOM.
    const teamNameDisplay = document.querySelector("#teamNameDisplay");
    const wordCountDisplay = document.querySelector("#wordCountDisplay");
    const teamScoreDisplay = document.querySelector("#teamScoreDisplay");
    const startNewGameButton = document.querySelector("#startNewGameButton");
    const showHighScoresButton = document.querySelector("#showHighScoresButton");

    // Retrieving saved data from the localStorage.
    const savedTeamName = localStorage.getItem("teamName");
    const savedWordCount = localStorage.getItem("wordCount");
    const savedTeamScore = localStorage.getItem("teamScore");

    // If the saved data exists, display it on the page.
    if (savedTeamName && savedWordCount && savedTeamScore) {
        teamNameDisplay.textContent = savedTeamName;
        wordCountDisplay.textContent = savedWordCount;
        teamScoreDisplay.textContent = savedTeamScore;
    }

    // Adding click event listeners for the buttons and cleaning the localStorage before redirection.
    startNewGameButton.addEventListener("click", () => {
        cleanLocalStore();
        // Redirecting to the game page.
        window.location.href = "index.html";
    });

    showHighScoresButton.addEventListener("click", () => {
        cleanLocalStore();
        // Redirecting to the high scores page.
        window.location.href = "high-scores.html";
    });
});

// Function to clean the localStorage by removing unnecessary data.
const cleanLocalStore = () => {
    // "teamName" is not removed as it is required for the game page and high scores page.
    localStorage.removeItem("wordCount");
    localStorage.removeItem("teamScore");
};
