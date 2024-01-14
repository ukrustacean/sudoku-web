async function main() {
    const table = document.getElementById('sudoku') as HTMLTableElement;

    let cells = '';

    for (let y = 0; y < 9; y += 1) {
        cells += '<tr>';
        for (let x = 0; x < 9; x += 1) {
            cells += `<td id="cell-${y}-${x}"><input class="cell-input" type="number"></td>`;
        }
        cells += '</tr>';
    }

    table.innerHTML = cells;
}

main();