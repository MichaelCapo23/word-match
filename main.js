$(document).ready(startApp);

function startApp() {
    createDomBoard(dummyBoard());
}

function dummyBoard() {
    return Array(10).fill(0).map(row => Array(10).fill(0));
}

function createDomBoard(board) {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            const cell = $('<div>', {
                'class': `${'' + y + x} cell teal lighten-4`
            });
            $('.boardContainer').append(cell);
        })
    })
}
