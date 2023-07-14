// file name: high-scores.js

// Import the highScoresModule from high-scores.mjs
import highScoresModule from './high-scores.mjs';

// This event listener gets triggered when the DOM content is fully loaded.
document.addEventListener("DOMContentLoaded", event => {
  const startNewGameButton = document.querySelector("#startNewGameButton");
  
  // Attempt to retrieve the team name from local storage.
  const savedTeamName = localStorage.getItem("teamName");

  // If a team name is found, display it.
  if (savedTeamName) {
    teamNameDisplay.textContent = savedTeamName;
  }

  // Attach a click event listener to the "Start New Game" button.
  startNewGameButton.addEventListener("click", () => {
    // On click, it redirects the user to the main game page.
    window.location.href = "index.html";
  });

  // Fetches the high scores from the server.
  fetch("http://127.0.0.1:3000/highscores")
    .then(response => response.json())
    .then(data => {
      // On successful fetch, pass the data to the highScoresModule.
      highScoresModule.getHighScores(data);
    })
    .catch(error => {
      // Log any errors to the console.
      console.error('Failed to get high scores:', error);
    });
});
