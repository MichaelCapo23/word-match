$(document).ready(startApp);

const countdownTime = 180;
let timer;

/**
 * Adds initial button handlers
 */
function startApp() {
  addStartButtonHandler();
  M.AutoInit();
  $('.modal a').click(reset);
  const formattedTime = formatTime(countdownTime);
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
  $('.timerWrapper').css('visibility','visible');
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
  stopCountdown(timer);
  timer = countdown(countdownTime);
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

  const timer = setInterval(() => {
    if (--totalSeconds === 0) {
        clearInterval(timer);
        gameLost();
    }

    const formattedTime = formatTime(totalSeconds);
    displayTime(formattedTime);
  }, 1000)

  return timer;
}

/**
 * Clears countdown timer
 * @param {number} timer 
 */
function stopCountdown(timer) {
  clearInterval(timer);
}

function createEmptyBoard() {
    return Array(10).fill(0).map(row => Array(10).fill(0));
}

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

//generates 10 words, puts it in gameState wordArr, populats the left
//side banner, and calls the dynamic board creation
function populateWords() {
  populateBoard(createDynamicBoard());

  for (let index = 0; index < gameState.wordArr.length; index++) {
    $('.wordsArrContainer').append($('<h5>', {
        text: gameState.wordArr[index],
        'class': `center-align ${gameState.wordArr[index]}`
        }));
    }
}

function populateBoard(nestedArray) {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var coordinate = '.' + i + j;
            $(coordinate).find('.cellText').text(nestedArray[i][j]);
        }
    }
}

function addClickHandlers() {
    $(".containerWrapper").on("click", ".cell", clickHandlerFunction);
}

function removeClickHandlers() {
    $(".containerWrapper").off("click", ".cell", clickHandlerFunction);
}

function clickHandlerFunction() {
    var elem = $(this);
    elem.addClass('shakeAnimation');
    setTimeout(function(){
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

function drawLine(coordinate1, coordinate2){
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
  
function isWordMatch() {
    const normalIndex = gameState.wordArr.indexOf(gameState.wordString);
    const reversedWord = gameState.wordString.split('').reverse();
    const reverseString = reversedWord.join('');
    const reverseIndex = gameState.wordArr.indexOf(reverseString);
    if (normalIndex !== -1 || reverseIndex !== -1) {
        const word = $(`.${gameState.wordString}`);
        word.css('text-decoration', 'line-through red');
        const reverseWord = $(`.${reverseString}`);
        reverseWord.css('text-decoration', 'line-through red');
        if (normalIndex !== -1) {
            gameState.wordArr.splice(normalIndex, 1);
            drawLine({x: gameState.classColFirst, y: gameState.classRowFirst}, {x: gameState.classColSecond, y: gameState.classRowSecond});
            return true;
        } else {
            gameState.wordArr.splice(reverseIndex, 1);
            drawLine({x: gameState.classColFirst, y: gameState.classRowFirst}, {x: gameState.classColSecond, y: gameState.classRowSecond});
            return true;
        }
    }
    return false;
}

function matchedWordsLeft() {
    gameState.wordsLeftToMatch--;
    if (gameState.wordsLeftToMatch === 0) {
        gameWon();
    }
}

function gameWon() {
    $('#gameWon').modal('open');
    stopCountdown(timer);
}

function gameLost() {
    $('#gameLost').modal('open');
}