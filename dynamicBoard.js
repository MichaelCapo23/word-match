const words = [
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
];

config = {
  length: 10,
  directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
}

function getRandomWords() {
  return words;
}

function sortWordsByLength(words) {
  const sortedWords = words.slice(0);

  sortedWords.sort((a, b) => b.length - a.length);
  return sortedWords;
}

function createBoard() {
  return Array(10).fill(0).map(row => Array(10).fill(0));
}

function getRandomCoordinate() {
  const x = Math.random() * config.length | 0;
  const y = Math.random() * config.length | 0;

  return { x, y };
}

function getRandomDirection() {
  return config.directions[Math.random() * config.directions.length | 0];
}

function getOppositeDirection(direction) {
  const index = config.directions.indexOf(direction);
  const oppositeIndex = (index + 4) % config.directions.length;

  return config.directions[oppositeIndex];
}

function getNextCoordinate(coordinate, direction) {
  const vectors = {
    'N':  () => ({ x: coordinate.x, y: coordinate.y - 1 }),
    'S':  () => ({ x: coordinate.x, y: coordinate.y + 1 }),
    'E':  () => ({ x: coordinate.x + 1, y: coordinate.y }),
    'W':  () => ({ x: coordinate.x - 1, y: coordinate.y }),
    'NE': () => ({ x: coordinate.x + 1, y: coordinate.y - 1 }),
    'SE': () => ({ x: coordinate.x + 1, y: coordinate.y + 1}),
    'SW': () => ({ x: coordinate.x - 1, y: coordinate.y + 1}),
    'NW': () => ({ x: coordinate.x - 1, y: coordinate.y - 1 }),
  }

  return vectors[direction]();
}

function isCoordinateInbounds(coordinate) {
  return 0 <= coordinate.x && coordinate.x < config.length &&
         0 <= coordinate.y && coordinate.y < config.length;
}

function isWordInbounds(coordinate, direction, word) {
  let length = word.length;
  let newCoordinate = coordinate;
  
  while (length--) {
    if (!isCoordinateInbounds(newCoordinate)) return false;

    newCoordinate = getNextCoordinate(newCoordinate, direction);
  }

  return true;
}

function getInboundsVector(word) {
  const coordinate = getRandomCoordinate(config.length);
  let direction = getRandomDirection();

  while (!isWordInbounds(coordinate, direction, word)) {
    direction = getRandomDirection();
  }

  return { coordinate, direction };
}

function canPlaceWord(coordinate, direction, word, board) {
  if (!isWordInbounds(coordinate, direction, word)) return false;

  let newCoordinate = coordinate;

  for (let i = 0; i < word.length; i++) {
    if (board[newCoordinate.y][newCoordinate.x] && board[newCoordinate.y][newCoordinate.x] !== word[i]) {
      return false;
    }

    newCoordinate = getNextCoordinate(newCoordinate, direction);
  }

  return true;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.random() * i | 0;

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// return direction and starting coordinate if possible, false if not
function getValidVector(coordinate, word, letterPosition, board) {
  const directions = shuffle(config.directions.slice(0));

  // iterate over directions 
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    let startingCoordinate = coordinate;
    let position = letterPosition;
    const oppositeDirection = getOppositeDirection(direction);

    while (position--) {
      startingCoordinate = getNextCoordinate(startingCoordinate, oppositeDirection);
    }

    // check if word can be placed
    if (canPlaceWord(startingCoordinate, direction, word, board)) {
      return { coordinate: startingCoordinate, direction };
    }
  }

  return false;
}

function placeWordAndSaveCoordinates({coordinate, direction} = vector, word, board, directory) {
  let newCoordinate = coordinate;
  for (let i = 0; i < word.length; i++) {
    board[newCoordinate.y][newCoordinate.x] = word[i];

    if (directory[word[i]]) {
      directory[word[i]].push(newCoordinate);      
    } else {
      directory[word[i]] = [newCoordinate];
    }

    newCoordinate = getNextCoordinate(newCoordinate, direction);
  }
}

// iterate over a word and look for valid starting vector(coordinate and direction) or false
function getValidWordVector(word, board, directory) {
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (directory[letter]) {
      // get a random letter coordinate
      const coordinates = shuffle(directory[letter].slice(0));

      // iterate over coordinates and find valid vector (coordinate, direction) 
      for (let j = 0; j < coordinates.length; j++) {
        const vector = getValidVector(coordinates[j], word, i, board);

        // if valid vector, return
        if (vector) return vector;
      }
    } 
  }

  return false;
}

function createDynamicBoard() {
  const board = createBoard();
  const directory = {};
  const words = sortWordsByLength(getRandomWords());
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // if first word, place anywhere inbounds
    if (i === 0) {
      const vector = getInboundsVector(word);

      placeWordAndSaveCoordinates(vector, word, board, directory);
      words.splice(i, 1);
    // if not first word, connect to placed words
    } else {
      const validWordVector = getValidWordVector(word, board, directory);

      if (validWordVector) {
        placeWordAndSaveCoordinates(validWordVector, word, board, directory);

        words.splice(i, 1);
      }
    }
  }

  board.forEach((row, y) => {
    row.forEach((value, x) => {

    })
  })
  // if can't find, iterate again
  
  return board;
}

function getRandomNumber(start, end) {
  return ((Math.random() * (end - start + 1)) | 0) + start;
}

function getRandomLetter() {
  return String.fromCharCode(getRandomNumber(97, 122));
}

const board = createDynamicBoard();

console.log(board);

//    y  x
// board[3][3] = 'a';
// board[4][3] = 't';
// board[5][3] = 'a';
// board[6][3] = 'r';
// board[7][3] = 'i';

// const direction = getValidVector({ y: 5, x: 3 }, 'bare', 1, board);
// console.log(direction);

// console.log(board);

// create board
// create directory
// generate words
// sort words by longest to shortest
  // first word:
    // get valid vector
    // place word
  // other words:
    // iterate letters
      // check if letter exists in directory 
      // if exists, find valid vector that is in bounds
        // if valid vector found
          // see if word can be placed
            // if yes, place word and save coordinates
            // remove word from list
        // if no valid vector, check next letter
    // if no valid letter, check next word
  // if no valid word, restart from first word
// if can't create board with 3 iterations, generate new words

// const board = createDynamicBoard();
// console.log(board);



// cleanup conditionals

