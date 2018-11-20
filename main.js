var gameState = {
    firstClick: null,
    classRowFirst : null,
    classColFirst : null,
    secondClick: null,
    wordString: null,
    wordArr: ['length', "booth", "wild", "seat"]
};

$(document).ready(startApp);

function startApp() {
    createDomBoard(dummyBoard());
    // addWordToBoard();
    addClickHandlers();
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

// function addWordToBoard() {
//     for (var i = 0; i < gameState.wordArr[0].length; i++) {
//         $(".cell." + 0 + i).text(gameState.wordArr[0][i]);
//     }
// }

function addClickHandlers() {
    $(".containerWrapper").on("click", ".cell", clickHandlerFunction);
}

function removeClickHandlers() {
    $(".containerWrapper").off("click", ".cell", clickHandlerFunction);
    console.log("they're off");
}

function clickHandlerFunction() {
    if (gameState.firstClick === null) {
        gameState.firstClick = this;
        var overallClassFirst = gameState.firstClick.className;
        gameState.classRowFirst = overallClassFirst.slice(0, 1);
        var classColFirst = overallClassFirst.slice(0, 2);
        gameState.classColFirst = classColFirst.slice(1, 2);
        console.log("Row: ", gameState.classRowFirst);
        console.log("Col: ", gameState.classColFirst);
        console.log(gameState.firstClick);
    } else {
        gameState.secondClick = this;
        var overallClassSecond = gameState.secondClick.className;
        var classRowSecond = overallClassSecond.slice(0, 1);
        var classColSecond = overallClassSecond.slice(0, 2);
        classColSecond = classColSecond.slice(1, 2);
        console.log("RowSecond: ", classRowSecond);
        console.log("ColSecond: ", classColSecond);
        console.log(gameState.secondClick);
        removeClickHandlers();
        if(isValidMove(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond)) {
            // if() {
            // }
            console.log("valid move");
        }
        //
        //
        // }
    }

}

function isValidMove(row1, row2, col1, col2 ) {
    var rowDiff = Math.abs(row2 - row1);
    var colDiff = Math.abs(col2 - col1);
    if(colDiff === 0 && rowDiff === 0) {
        return false;
    }
    else if(rowDiff === colDiff) {
        console.log("True");
        return true;
    } else if(colDiff === 0) {
        console.log("True");
        return true;
    } else if(rowDiff === 0) {
        console.log("True");
        return true;
    }
    return false;
}
