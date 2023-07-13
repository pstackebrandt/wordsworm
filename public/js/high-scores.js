// file name: high-scores.js (high scores page)

// Import the highScoresModule from high-scores.mjs
import highScoresModule from './high-scores.mjs';

// Get the team name from localStorage
// and display it on the page
document.addEventListener("DOMContentLoaded", (event) => {
    const startNewGameButton = document.querySelector("#startNewGameButton");

    const savedTeamName = localStorage.getItem("teamName");

    if (savedTeamName) {
        teamNameDisplay.textContent = savedTeamName;
    }

    startNewGameButton.addEventListener("click", () => {
        // Weiterleitung zur Spielseite
        window.location.href = "index.html";
    });

    fetch("http://127.0.0.1:3000/highscores") // Replace with the actual endpoint to fetch high scores from your server
    .then(response => response.json())
    .then(data => highScoresModule.getHighScores(data)) // Pass the data to the function in high-scores.mjs
    .catch(error => console.error('Failed to get high scores:', error));
});
