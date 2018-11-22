/**
 * Determines direction based on clicked cells
 */
function determineDirection() {
    if (gameState.classRowSecond < gameState.classRowFirst && gameState.classColSecond > gameState.classColFirst) {
        northEast(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    } else if (gameState.classRowSecond === gameState.classRowFirst && gameState.classColSecond > gameState.classColFirst) {
        east(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    } else if(gameState.classRowSecond > gameState.classRowFirst && gameState.classColSecond > gameState.classColFirst) {
        southEast(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    } else if(gameState.classRowSecond > gameState.classRowFirst && gameState.classColSecond === gameState.classColFirst) {
        south(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    } else if(gameState.classRowSecond > gameState.classRowFirst && gameState.classColSecond < gameState.classColFirst) {
        southWest(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    } else if(gameState.classRowSecond === gameState.classRowFirst && gameState.classColSecond < gameState.classColFirst){
        west(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    } else if(gameState.classRowSecond < gameState.classRowFirst && gameState.classColSecond < gameState.classColFirst) {
        northwest(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    } else if(gameState.classRowSecond < gameState.classRowFirst && gameState.classColSecond === gameState.classColFirst) {
        north(gameState.classRowFirst, gameState.classRowSecond, gameState.classColFirst, gameState.classColSecond);
    }
}

/**
 * Goes to next coordinate from current in Northeast direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function northEast(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        rowCount--;
        colCount++;
    }
}

/**
 * Goes to next coordinate from current in East direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function east(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(col2 - col1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        colCount++;
    }
}

/**
 * Goes to next coordinate from current in Southwest direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function southEast(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        colCount++;
        rowCount++;
    }
}

/**
 * Goes to next coordinate from current in South direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function south(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        rowCount++;
    }
}

/**
 * Goes to next coordinate from current in Southwest direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function southWest(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(col2 - col1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        rowCount++;
        colCount--;
    }
}

/**
 * Goes to next coordinate from current in West direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function west(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(col2 - col1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        colCount--;
    }
}

/**
 * Goes to next coordinate from current in Northwest direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function northwest(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        colCount--;
        rowCount--;
    }
}

/**
 * Goes to next coordinate from current in North direction
 * @param {number} row1 
 * @param {number} row2
 * @param {number} col1
 * @param {number} col2
 */
function north(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();
        rowCount--;
    }
}
