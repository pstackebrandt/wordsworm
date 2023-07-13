// file name: high-scores.js (high-scores page)

// Get the team name from localStorage
// and display it on the page
document.addEventListener("DOMContentLoaded", (event) => {
    const startNewGameButton = document.querySelector("#startNewGameButton");
    const showHighScoresButton = document.querySelector("#showHighScoresButton");

    const savedTeamName = localStorage.getItem("teamName");

    if (savedTeamName) {
        teamNameDisplay.textContent = savedTeamName;
    }

    startNewGameButton.addEventListener("click", () => {
        // Weiterleitung zur Spielseite
        window.location.href = "index.html";
    });
});
