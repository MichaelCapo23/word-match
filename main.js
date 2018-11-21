var gameState = {
    firstClick: null,
    classRowFirst: null,
    classColFirst: null,
    classColSecond: null,
    classRowSecond: null,
    secondClick: null,
    wordString: "",
    wordArr: [
      'weshire',
      'wheat',
      'munky',
      'session',
      'rainy',
      'active',
      'gnostic',
      'chester',
      'rage',
      'cricked',
    ],
};

$(document).ready(startApp);

function startApp() {
    createDomBoard(dummyBoard());
    addClickHandlers();
    populateWords();
    canvasSetup();

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

  const testArray = 
    [['y', 'e', 'r', 'i', 'h', 's', 'e', 'w', 0, 'c'],
      [0, 'n', 'a', 'c', 'h', 'e', 's', 't', 'e', 'r'],
      [0, 0, 'i', 'c', 0, 's', 0, 0, 'a', 'i'],
      ['w', 'h', 'e', 'a', 't', 's', 0, 'g', 0, 'c'],
      [0, 0, 0, 'y', 'r', 'i', 'e', 0, 0, 'k'],
      [0, 0, 0, 0, 'k', 'o', 'v', 0, 0, 'e'],
      ['c', 'i', 't', 's', 'o', 'n', 'g', 'e', 0, 'd'],
      [0, 0, 0, 0, 0, 0, 'u', 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 'm', 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

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

function canvasSetup() {
    var percent = '100%';
    var cellWidth = $('.cell').width();
    console.log(cellWidth);

    $(`<canvas>`, {
        'class': 'canvas',
        'id': 'canvas'
    }).css({
        'width': percent,
        'height': percent,
        'z-index': 1,
        'border': 'solid 1px black'
    }).prependTo('.boardContainer');
    
    drawLine({x: 7, y:8}, {x:2, y:3});
}

function drawLine(coordinate1, coordinate2){
    let canvasElement = $('.canvas')[0];
    let context = canvasElement.getContext('2d');

    let startX = 15 + coordinate1.x * 30;
    let startY = 7.5 + coordinate1.y * 15;
    let endX = 15 + coordinate2.x * 30;
    let endY = 7.5 + coordinate2.y * 15;

    context.strokeStyle = `rgb(68, 127, 221, 0.5)`;
    context.lineCap = "round";
    context.lineWidth = 12;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}