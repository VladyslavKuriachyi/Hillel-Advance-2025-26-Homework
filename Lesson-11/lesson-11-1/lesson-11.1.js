document.addEventListener('DOMContentLoaded', function () {
    const tableContainer = document.getElementById('tableP');
    const table = document.createElement('table');
    const size = 10;

    let headerRow = document.createElement('tr');
    let emptyCell = document.createElement('th');
    headerRow.appendChild(emptyCell);

    for (let i = 1; i <= size; i++) {
        let cell = document.createElement('th');
        cell.textContent = i;
        headerRow.appendChild(cell);
    }
    table.appendChild(headerRow);

    for (let i = 1; i <= size; i++) {
        let row = document.createElement('tr');

        let cell = document.createElement('th');
        cell.textContent = i;
        row.appendChild(cell);
        for (let j = 1; j <= size; j++) {
            let cell = document.createElement('td');
            cell.textContent = i * j;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
 tableContainer.appendChild(table);
});