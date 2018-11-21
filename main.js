var gameState = {
    firstClick: null,
    classRowFirst: null,
    classColFirst: null,
    secondClick: null,
    wordString: "",
    wordArr: ['length', "booth", "wild", "seat"]
};

$(document).ready(startApp);

function startApp() {
    createDomBoard(dummyBoard());
    addClickHandlers();
    populateWords();
}

function dummyBoard() {
    return Array(10).fill(0).map(row => Array(10).fill(0));
}

function createDomBoard(board) {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            const cell = $('<div>', {
                'class': `${'' + y + x} cell`
            }).append($('<h5>',{
                text: `${Math.floor(Math.random() * 10)}`,
                'class' : 'cellText'  //generates random number for testing
            }));
            $('.boardContainer').append(cell);
        })
    })
}

//generates 10 words, puts it in gameState wordArr, populats the left
//side banner, and calls the dynamic board creation
function populateWords() {
    gameState.wordsArr = generateWords();

    for (let index = 0; index < gameState.wordsArr.length; index++){
        $('.wordsArrContainer').append($('<h5>',{
            text: gameState.wordsArr[index],
            'class': 'center-align'
        }));
    }
    
}

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
        if (isValidMove(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond)) {
            if (classRowSecond < gameState.classRowFirst && classColSecond > gameState.classColFirst) {
                northEast(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            } else if (classRowSecond === gameState.classRowFirst && classColSecond > gameState.classColFirst) {
                east(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            } else if(classRowSecond > gameState.classRowFirst && classColSecond > gameState.classColFirst) {
                southEast(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            } else if(classRowSecond > gameState.classRowFirst && classColSecond === gameState.classColFirst) {
                south(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            } else if(classRowSecond > gameState.classRowFirst && classColSecond < gameState.classColFirst) {
                southWest(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            } else if(classRowSecond === gameState.classRowFirst && classColSecond < gameState.classColFirst){
                 west(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            } else if(classRowSecond < gameState.classRowFirst && classColSecond < gameState.classColFirst) {
                 northwest(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            } else if(classRowSecond < gameState.classRowFirst && classColSecond === gameState.classColFirst) {
                 north(gameState.classRowFirst, classRowSecond, gameState.classColFirst, classColSecond);
            }
        }
    }
}

function isValidMove(row1, row2, col1, col2) {
    var rowDiff = Math.abs(row2 - row1);
    var colDiff = Math.abs(col2 - col1);
    if (colDiff === 0 && rowDiff === 0) {
        return false;
    }
    else if (rowDiff === colDiff) {
        console.log("True");
        return true;
    } else if (colDiff === 0) {
        console.log("True");
        return true;
    } else if (rowDiff === 0) {
        console.log("True");
        return true;
    }
    return false;
}

function northEast(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount);
        rowCount--;
        colCount++;
    }
    console.log(gameState.wordString);
}

function east(row1, row2, col1, col2) {
    var word = "";
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(col2 - col1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();   //.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        colCount++;
    }
    console.log(gameState.wordString);
}