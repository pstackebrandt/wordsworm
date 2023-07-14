// file name: high-scores.mjs

const highScoresModule = (() => {
    // This function handles the creation and display of high scores.
    const getHighScores = async (data) => {
        try {
            console.log('High scores:', data);

            // Retrieves the 'score-list' element in the document.
            let scoreList = document.getElementById('score-list');

            // Clear the score list before appending new scores.
            scoreList.innerHTML = '';

            // Creates the table element.
            let table = document.createElement('table');
            table.classList.add('table', 'table-bordered');

            // Creates the table head and the header row.
            let thead = document.createElement('thead');
            let headRow = document.createElement('tr');
            thead.classList.add('table-primary');

            // Creates header cells and assigns them text content.
            let teamHeader = document.createElement('th');
            let scoreHeader = document.createElement('th');
            teamHeader.textContent = 'Team';
            scoreHeader.textContent = 'Punkte';

            // Appends the header cells to the header row.
            headRow.append(teamHeader, scoreHeader);

            // Appends the header row to the table head.
            thead.appendChild(headRow);

            // Appends the table head to the table.
            table.appendChild(thead);

            // Creates the table body.
            let tbody = document.createElement('tbody');

            // For each high score, create a new row and cells.
            data.forEach(score => {
                let row = document.createElement('tr');
                let teamCell = document.createElement('td');
                let scoreCell = document.createElement('td');
                teamCell.textContent = score.value.teamName;
                scoreCell.textContent = score.value.teamScore;

                // Appends the cells to the row.
                row.append(teamCell, scoreCell);

                // Appends the row to the table body.
                tbody.appendChild(row);
            });

            // Appends the table body to the table.
            table.appendChild(tbody);

            // Appends the table to the score list.
            scoreList.appendChild(table);
        } catch (error) {
            console.error('Failed to get high scores:', error);
        }
    }

    // Expose the getHighScores function to other modules.
    return {
        getHighScores,
    }
})();

export default highScoresModule;
