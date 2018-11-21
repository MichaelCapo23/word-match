function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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

function northEast(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        rowCount--;
        colCount++;
    }
    console.log(gameState.wordString);
}

function east(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(col2 - col1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        colCount++;
    }
    console.log(gameState.wordString);
}

function southEast(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        colCount++;
        rowCount++;
    }
    console.log(gameState.wordString);
}

function south(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        rowCount++;
    }
    console.log(gameState.wordString);
}

function southWest(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(col2 - col1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        rowCount++;
        colCount--;
    }
    console.log(gameState.wordString);
}

function west(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(col2 - col1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        colCount--;
    }
    console.log(gameState.wordString);
}

function northwest(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        colCount--;
        rowCount--;
    }
    console.log(gameState.wordString);
}

function north(row1, row2, col1, col2) {
    var colCount = col1;
    var rowCount = row1;
    var len = Math.abs(row2 - row1);
    for(var i = 0; i <= len; i++) {
        gameState.wordString += $(".cell." + rowCount + colCount).text();//.find(".cellText").text();
        console.log(".cell." + rowCount + colCount);
        rowCount--;
    }
    console.log(gameState.wordString);
}