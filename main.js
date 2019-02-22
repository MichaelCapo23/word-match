$(document).ready(startApp);
var boardSize = 10;
var colors = ['red', 'purple', 'fuchsia', 'blue', 'aqua', 'lime', 'green', 'yellow', 'orange'];
var totalColorChanges = 0;
var row = 0;
var col = 0;
var end = 0;
var currentColor = colors.shift();
let stillChangeColor = false;
/**
 * Adds initial button handlers
 */


function startApp() {
    addStartButtonHandler();
    M.AutoInit();
    $('.modal a').click(reset);
    const formattedTime = formatTime(gameState.countdownTime);
    displayTime(formattedTime);
}

/**
 * Start game callback and activates reset button handler
 */
function start() {
    reset();
    $('.resetButton').click(reset);
    $('.wordsCard').addClass('z-depth-2');
    $('.startButton').removeClass('pulse');
    $('.startButton').off('click', start);
    $('.timerWrapper').css('visibility', 'visible');
    $('.credits').css('visibility', 'hidden');
}

/**
 * Adds start game callback handler to button
 */
function addStartButtonHandler() {
    $('.startButton').click(start);
}

/**
 * Resets game and handlers
 */
function reset() {
    $('.boardContainer').empty();
    $('.wordsArrContainer').empty();
    createDomBoard(createEmptyBoard());
    addClickHandlers();
    populateWords();
    canvasSetup();
    stopCountdown();
    countdown(gameState.countdownTime);
}

/**
 * Updates time display
 * @param {string} formattedTime
 */
function displayTime(formattedTime) {
    const display = $('.timerSpan');
    display.text(formattedTime);
}

/**
 * Return time formatted in MM:SS
 * @param {number} totalSeconds
 */
function formatTime(totalSeconds) {
    const minutes = totalSeconds / 60 | 0;
    const seconds = totalSeconds % 60;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedTime = displayMinutes + ':' + displaySeconds;

    return formattedTime;
}

/**
 * Counts down timer and updates display
 * @param {seconds} totalSeconds
 */
function countdown(totalSeconds) {
    const formattedTime = formatTime(totalSeconds);
    displayTime(formattedTime);

    gameState.timer = setInterval(() => {
        if (--totalSeconds === 0) {
            clearInterval(gameState.timer);
            gameLost();
        }

        const formattedTime = formatTime(totalSeconds);
        displayTime(formattedTime);
    }, 1000)
}

/**
 * Clears countdown timer
 */
function stopCountdown() {
    clearInterval(gameState.timer);
}

/**
 * Creates empty board
 */
function createEmptyBoard() {
    return Array(10).fill(0).map(row => Array(10).fill(0));
}

/**
 * Creates empty board on the DOM
 * @param {array} board
 */
function createDomBoard(board) {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            const cell = $('<div>', {
                'class': `${'' + y + x} cell`
            }).append($('<h5>', {
                'class': 'cellText'
            }));
            $('.boardContainer').append(cell);
        })
    })
}

/**
 * Populates board and words side banner on DOM
 */
function populateWords() {
    populateBoard(createDynamicBoard());
    for (let index = 0; index < gameState.wordArr.length; index++) {
        $('.wordsArrContainer').append($('<h5>', {
            text: gameState.wordArr[index],
            'class': `center-align ${gameState.wordArr[index]}`
        }));
    }
}


/**
 * Populates board on DOM
 * @param {array} nestedArray
 */
function populateBoard(nestedArray) {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var coordinate = '.' + i + j;
            $(coordinate).find('.cellText').text(nestedArray[i][j]);
        }
    }
}

/**
 * Adds click handlers for letters on the board
 */
function addClickHandlers() {
    $(".containerWrapper").on("click", ".cell", clickHandlerFunction);
}

/**
 * Removes click handlers for letters on the board
 */
function removeClickHandlers() {
    $(".containerWrapper").off("click", ".cell", clickHandlerFunction);
}

/**
 * Click handler for checking if selection is valid and word match exists
 * Also adds shake animation upon click
 */
function clickHandlerFunction() {
    var elem = $(this);
    elem.addClass('shakeAnimation');
    setTimeout(function () {
        elem.removeClass('shakeAnimation');
    }, 820);
    if (gameState.firstClick === null) {
        gameState.firstClick = this;
        var overallClassFirst = gameState.firstClick.className;
        gameState.classRowFirst = overallClassFirst.slice(0, 1);
        var classColFirst = overallClassFirst.slice(0, 2);
        gameState.classColFirst = classColFirst.slice(1, 2);
    } else {
        gameState.secondClick = this;
        var overallClassSecond = gameState.secondClick.className;
        gameState.classRowSecond = overallClassSecond.slice(0, 1);
        var classColSecond = overallClassSecond.slice(0, 2);
        gameState.classColSecond = classColSecond.slice(1, 2);
        removeClickHandlers();
        if (isValidMove(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond)) {
            determineDirection(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
            if (isWordMatch()) {
                matchedWordsLeft();
                gameState.firstClick = null;
                gameState.secondClick = null;
                gameState.classRowFirst = null;
                gameState.classColFirst = null;
                gameState.classColSecond = null;
                gameState.classRowSecond = null;
                gameState.wordString = "";
                addClickHandlers();
            } else {
                gameState.firstClick = null;
                gameState.secondClick = null;
                gameState.classRowFirst = null;
                gameState.classColFirst = null;
                gameState.classColSecond = null;
                gameState.classRowSecond = null;
                gameState.wordString = "";
                addClickHandlers();
            }
        } else {
            gameState.firstClick = null;
            gameState.secondClick = null;
            gameState.classRowFirst = null;
            gameState.classColFirst = null;
            gameState.classColSecond = null;
            gameState.classRowSecond = null;
            gameState.wordString = "";
            addClickHandlers();
        }
    }
}

/**
 * Checks if selection is valid
 * @param {number} row1
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function isValidMove(row1, row2, col1, col2) {
    var rowDiff = Math.abs(row2 - row1);
    var colDiff = Math.abs(col2 - col1);
    if (colDiff === 0 && rowDiff === 0) {
        return false;
    }
    else if (rowDiff === colDiff) {
        return true;
    } else if (colDiff === 0) {
        return true;
    } else if (rowDiff === 0) {
        return true;
    }
    return false;
}

/**
 * Creates blank canvas overlaid on board
 */
function canvasSetup() {
    var percent = '100%';
    var cellWidth = $('.cell').width();

    $(`<canvas>`, {
        'class': 'canvas',
        'id': 'canvas'
    }).css({
        'width': percent,
        'height': percent,
        'z-index': 1
    }).prependTo('.boardContainer');
}

/**
 * Draws line on canvas between coordinates
 * @param {object} coordinate1
 * @param {object} coordinate2
 */
function drawLine(coordinate1, coordinate2) {
    let canvasElement = $('.canvas')[0];
    let context = canvasElement.getContext('2d');

    let startX = 15 + parseInt(coordinate1.x) * 30;
    let startY = 7.5 + parseInt(coordinate1.y) * 15;
    let endX = 15 + parseInt(coordinate2.x) * 30;
    let endY = 7.5 + parseInt(coordinate2.y) * 15;

    context.strokeStyle = 'rgb(119, 202, 194, 0.4)';
    context.lineCap = "round";
    context.lineWidth = 12;
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

/**
 * Checks if word match exists
 */
function isWordMatch() {
    const normalIndex = gameState.wordArr.indexOf(gameState.wordString);
    const reversedWord = gameState.wordString.split('').reverse();
    const reverseString = reversedWord.join('');
    const reverseIndex = gameState.wordArr.indexOf(reverseString);
    if (normalIndex !== -1 || reverseIndex !== -1) {
        const word = $(`.${gameState.wordString}`);
        word.css('text-decoration', 'line-through black');
        const reverseWord = $(`.${reverseString}`);
        reverseWord.css('text-decoration', 'line-through black');
        if (normalIndex !== -1) {
            gameState.wordArr.splice(normalIndex, 1);
            drawLine({x: gameState.classColFirst, y: gameState.classRowFirst}, {
                x: gameState.classColSecond,
                y: gameState.classRowSecond
            });
            return true;
        } else {
            gameState.wordArr.splice(reverseIndex, 1);
            drawLine({x: gameState.classColFirst, y: gameState.classRowFirst}, {
                x: gameState.classColSecond,
                y: gameState.classRowSecond
            });
            return true;
        }
    }
    return false;
}

/**
 * Checks words remaining and wins if equal zero
 */
function matchedWordsLeft() {
    gameState.wordsLeftToMatch--;
    if (gameState.wordsLeftToMatch === 0) {
        gameWon();
    }
}

/**
 * Opens game won modal and stops countdown
 */
function gameWon() {
    $('#gameWon').modal('open');
    stopCountdown();
    stillChangeColor = true;
    changeBackgroundColor();
}

/**
 * Opens game lost modal and stops countdown
 */
function gameLost() {
    $('#gameLost').modal('open');
}

function stopBackgroundColor() {
    stillChangeColor = false;
    changeBackgroundColorWhite();
}

function changeBackgroundColorWhite() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let coordinate = '.' + i + j;
            $(coordinate).css("background-color", "white");
        }
    }
}

function changeBackgroundColor() {
    if (totalColorChanges > 9) {
        row = totalColorChanges - 9;
        col = boardSize - 1;
        end++;
    } else {
        col = totalColorChanges;
        row = 0;
    }
    for (var i = col; col >= end; col--) {
        $(`.${row}${col}`).css('background-color', currentColor);
        row++;
    }
    totalColorChanges++;
    if (totalColorChanges === 19) {
        totalColorChanges = 0;
        colors.push(currentColor);
        currentColor = colors.shift();
        end = 0;
    }
    if(stillChangeColor) {
        setTimeout(changeBackgroundColor, 50);
    } else {
        changeBackgroundColorWhite();
    }

}