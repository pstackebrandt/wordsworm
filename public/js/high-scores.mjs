// file name: high-scores.mjs

const highScoresModule = (() => {
    // data contains an array of objects with match results:
    async function getHighScores(data) {
        try {
            console.log('High scores:', data);

            // Get the 'score-list' element in the document.
            let scoreList = document.getElementById('score-list');

            // Make sure the score list is empty before appending new scores.
            scoreList.innerHTML = '';

            data.forEach(score => {
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

                // Check if score.value.foundWords is defined and it's an array before joining
                if (score.value.foundWords && Array.isArray(score.value.foundWords)) {
                    foundWordsCol.textContent = score.value.foundWords.join(', ');
                } else {
                    // You can provide a fallback value here if foundWords is not defined or not an array
                    foundWordsCol.textContent = 'Keine Wörter gefunden';
                }

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
