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

            // Create the table element
            let table = document.createElement('table');
            table.classList.add('table', 'table-bordered');

            // Create the table head
            let thead = document.createElement('thead');
            thead.classList.add('table-primary');

            // Create the table head row
            let headRow = document.createElement('tr');

            // Create the team header cell
            let teamHeader = document.createElement('th');
            teamHeader.textContent = 'Team';

            // Create the score header cell
            let scoreHeader = document.createElement('th');
            scoreHeader.textContent = 'Punkte';

            // Append the header cells to the header row
            headRow.appendChild(teamHeader);
            headRow.appendChild(scoreHeader);

            // Append the header row to the table head
            thead.appendChild(headRow);

            // Append the table head to the table
            table.appendChild(thead);

            // Create the table body
            let tbody = document.createElement('tbody');

            data.forEach(score => {
                // Create a new row for each high score.
                let row = document.createElement('tr');

                // Create the team cell
                let teamCell = document.createElement('td');
                teamCell.textContent = score.value.teamName;

                // Create the score cell
                let scoreCell = document.createElement('td');
                scoreCell.textContent = score.value.teamScore;

                // Append the cells to the row
                row.appendChild(teamCell);
                row.appendChild(scoreCell);

                // Append the row to the table body
                tbody.appendChild(row);
            });

            // Append the table body to the table
            table.appendChild(tbody);

            // Append the table to the score list
            scoreList.appendChild(table);
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
