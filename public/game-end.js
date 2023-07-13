// file name: game-end.js (game end page)

// Get the team name, word count and team score from localStorage
// and display them on the page
// Remove unnessary data from localStorage on start of new game with index.html
document.addEventListener("DOMContentLoaded", (event) => {
    const teamNameDisplay = document.querySelector("#teamNameDisplay");
    const wordCountDisplay = document.querySelector("#wordCountDisplay");
    const teamScoreDisplay = document.querySelector("#teamScoreDisplay");
    const startNewGameButton = document.querySelector("#startNewGameButton");
    const showHighScoresButton = document.querySelector("#showHighScoresButton");

    const savedTeamName = localStorage.getItem("teamName");
    const savedWordCount = localStorage.getItem("wordCount");
    const savedTeamScore = localStorage.getItem("teamScore");

    if (savedTeamName && savedWordCount && savedTeamScore) {
        teamNameDisplay.textContent = savedTeamName;
        wordCountDisplay.textContent = savedWordCount;
        teamScoreDisplay.textContent = savedTeamScore;
    }

    startNewGameButton.addEventListener("click", () => {
        cleanLocalStore();

        // Weiterleitung zur Spielseite
        window.location.href = "index.html";
    });

    showHighScoresButton.addEventListener("click", () => {
        cleanLocalStore();

        // Weiterleitung zur High score-Seite
        window.location.href = "high-scores.html";
    });
});

const cleanLocalStore = () => {
    // Zurücksetzen der gespeicherten Daten im localStorage

    // "teamName" wird nicht zurückgesetzt, da es für die Game page und die 
    //  High score-Seite benötigt wird.
    localStorage.removeItem("wordCount");
    localStorage.removeItem("teamScore");
}
