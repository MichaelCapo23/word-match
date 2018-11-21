var gameState = {
    firstClick: null,
    classRowFirst: null,
    classColFirst: null,
    classColSecond: null,
    classRowSecond: null,
    secondClick: null,
    wordString: "",
    wordArr: ['wheat', 'munky', 'session', 'rainy', 'active', 'gnostic', 'chester', 'rage', 'cricked','weshire']
};

$(document).ready(startApp);

function startApp() {
    createDomBoard(dummyBoard());
    addClickHandlers();
    populateWords();
    addWordToBoard()
}

function addWordToBoard() {
    for (var i = 0; i < gameState.wordArr[0].length; i++) {
        $(".cell." + 0 + i).find(".cellText").text(gameState.wordArr[0][i]);
    }
}

function dummyBoard() {
    return Array(10).fill(0).map(row => Array(10).fill(0));
}

function createDomBoard(board) {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            const cell = $('<div>', {
                'class': `${'' + y + x} cell`
            }).append($('<h5>', {
                text: `${Math.floor(Math.random() * 10)}`,
                'class': 'cellText'  //generates random number for testing
            }));
            $('.boardContainer').append(cell);
        })
    })
}

//generates 10 words, puts it in gameState wordArr, populats the left
//side banner, and calls the dynamic board creation
function populateWords() {
    // gameState.wordArr = generateWords();
    for (let index = 0; index < gameState.wordArr.length; index++) {
        $('.wordsArrContainer').append($('<h5>', {
            text: gameState.wordArr[index],
            'class': 'center-align'
        }));
    }

    const testArray = [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 'w', 'h', 'e', 'a', 't', 0, 0, 0, 0 ],
    [ 0, 0, 'e', 0, 0, 0, 0, 0, 0, 0 ],
    [ 'g', 'n', 'o', 's', 't', 'i', 'c', 0, 0, 0 ],
    [ 0, 0, 0, 0, 'h', 'r', 'a', 'i', 'n', 'y' ],
    [ 0, 0, 0, 0, 'i', 'i', 0, 0, 0, 0 ],
    [ 0, 0, 0, 'c', 0, 0, 'r', 0, 0, 0 ],
    [ 0, 0, 'k', 0, 0, 0, 0, 'e', 0, 0 ],
    [ 0, 'e', 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 'd', 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];
    populateBoard(testArray);
}

function populateBoard(nestedArray){
    for (var i = 0; i < 10; i++){
        for (var j = 0; j < 10; j++){
            var coordinate = '.' + i + j;
            $(coordinate).find('.cellText').text(nestedArray[i][j]);
            if (isNaN(nestedArray[i][j])){
                $(coordinate).css('background-color', 'grey');
            }
        }
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
        gameState.classRowSecond = overallClassSecond.slice(0, 1);
        var classColSecond = overallClassSecond.slice(0, 2);
        gameState.classColSecond = classColSecond.slice(1, 2);
        console.log("RowSecond: ", gameState.classRowSecond);
        console.log("ColSecond: ", gameState.classColSecond);
        console.log(gameState.secondClick);
        removeClickHandlers();
        if (isValidMove(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond)) {
            determineDirection(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
            consoleshit(compareSelectedToWordArr());
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

function compareSelectedToWordArr() {
    var wordMatched = false;
    for (var i = 0; i < gameState.wordArr.length; i++) {
        var mathcingLettersNum = 0;
        for (var j = 0; j < gameState.wordString.length; j++) {
            if (gameState.wordString[j] === gameState.wordArr[i][j]) {
                console.log("same char at " + i);
                mathcingLettersNum++;
                if (mathcingLettersNum === gameState.wordArr[i].length) {
                    wordMatched = true;
                    return wordMatched
                }
            } else {
                console.log("Not true");
            }
        }
    }
    if(!wordMatched) {
     for (var word = gameState.wordArr.length-1; word >= 0; word--) {
            mathcingLettersNum = 0;
            letterCounter = 0;
            for (var index = gameState.wordString.length-1; index >= 0; index--) {
                if (gameState.wordString[index] === gameState.wordArr[word][letterCounter]) {
                    console.log("same char at " + word);
                    letterCounter++;
                    mathcingLettersNum++;
                    if (mathcingLettersNum === gameState.wordArr[word].length) {
                        wordMatched = true;
                        return wordMatched;
                    }
                } else {
                    console.log("Not true");
                }
            }
        }
    }
}

function consoleshit(tor) {
    console.log(tor);
}
