// file name: game-end.js

// Get the team name, word count and team score from localStorage
// and display them on the page
// Remove unnessary data from localStorage on start of new game with index.html
document.addEventListener("DOMContentLoaded", (event) => {
    const teamNameDisplay = document.querySelector("#teamNameDisplay");
    const wordCountDisplay = document.querySelector("#wordCountDisplay");
    const teamScoreDisplay = document.querySelector("#teamScoreDisplay");
    const startNewGameButton = document.querySelector("#startNewGameButton");

    const savedTeamName = localStorage.getItem("teamName");
    const savedWordCount = localStorage.getItem("wordCount");
    const savedTeamScore = localStorage.getItem("teamScore");

    if (savedTeamName && savedWordCount && savedTeamScore) {
        teamNameDisplay.textContent = savedTeamName;
        wordCountDisplay.textContent = savedWordCount;
        teamScoreDisplay.textContent = savedTeamScore;
    }

    startNewGameButton.addEventListener("click", () => {
        // Zurücksetzen der gespeicherten Daten im localStorage
        //localStorage.removeItem("teamName");
        localStorage.removeItem("wordCount");
        localStorage.removeItem("teamScore");

        // Weiterleitung zur Spielseite
        window.location.href = "index.html";
    });
});
