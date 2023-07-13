// file name: high-scores.mjs

import { fetchMatchResultsWithHighestScores } from './fetch-match-results-module.mjs';

const highScoresModule = (() => {
    async function getHighScores() {
        try {
            // Fetch data from the view.
            const data = await fetchMatchResultsWithHighestScores();

            // Get the 'score-list' element in the document.
            let scoreList = document.getElementById('score-list');

            // Make sure the score list is empty before appending new scores.
            scoreList.innerHTML = '';

            // Sort the data by teamScore in descending order.
            data.sort((a, b) => b.value.teamScore - a.value.teamScore);

            // Limit to the top 10 scores.
            data.slice(0, 10).forEach(score => {
                // Create a new score row for each high score.
                let scoreRow = document.createElement('div');
                scoreRow.classList.add('score-row');

                // Create the team and score row.
                let teamAndScoreRow = document.createElement('div');
                teamAndScoreRow.classList.add('row');
                let teamNameCol = document.createElement('div');
                teamNameCol.classList.add('col');
                teamNameCol.textContent = score.value.teamName;
                let teamScoreCol = document.createElement('div');
                teamScoreCol.classList.add('col');
                teamScoreCol.textContent = score.value.teamScore;
                teamAndScoreRow.appendChild(teamNameCol);
                teamAndScoreRow.appendChild(teamScoreCol);

                // Create the found words row.
                let foundWordsRow = document.createElement('div');
                foundWordsRow.classList.add('row');
                let foundWordsCol = document.createElement('div');
                foundWordsCol.classList.add('col');
                foundWordsCol.textContent = score.value.foundWords.join(', ');

                // Append both rows to the score row.
                scoreRow.appendChild(teamAndScoreRow);
                scoreRow.appendChild(foundWordsRow);

                // Append the score row to the score list.
                scoreList.appendChild(scoreRow);
            });
        } catch (error) {
            console.error('Failed to get high scores:', error);
        }
    }

    // Publicly accessible functions
    return {
        getHighScores,
    }
})();


export default highScoresModule;
