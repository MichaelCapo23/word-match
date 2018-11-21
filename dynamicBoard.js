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

/**
 * Return random words (dummy function)
 */
function getRandomWords() {
  return words;
}

/**
 * Return array of words sorted from longest to shortest
 * @param {array} words 
 */
function sortWordsByLength(words) {
  const sortedWords = words.slice(0);

  sortedWords.sort((a, b) => b.length - a.length);
  return sortedWords;
}

/**
 * Creates empty board with 0's
 * @param {number} length 
 */
function createBoard(length) {
  return Array(length).fill(0).map(row => Array(length).fill(0));
}

/**
 * Returns a random coordinate
 */
function getRandomCoordinate() {
  const x = Math.random() * config.length | 0;
  const y = Math.random() * config.length | 0;

  return { x, y };
}

/**
 * Return a random direction
 */
function getRandomDirection() {
  return config.directions[Math.random() * config.directions.length | 0];
}

/**
 * Return opposite direction
 * @param {string} direction 
 */
function getOppositeDirection(direction) {
  const index = config.directions.indexOf(direction);
  const oppositeIndex = (index + 4) % config.directions.length;

  return config.directions[oppositeIndex];
}

/**
 * Return next coordinates based on coordinate and direction
 * @param {object} coordinate 
 * @param {string} direction 
 */
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

/**
 * Checks if coordinates are inside board
 * @param {object} coordinate 
 */
function isCoordinateInbounds(coordinate) {
  return 0 <= coordinate.x && coordinate.x < config.length &&
         0 <= coordinate.y && coordinate.y < config.length;
}

/**
 * Checks if word can be placed inside board 
 * @param {object} coordinate 
 * @param {string} direction 
 * @param {string} word 
 */
function isWordInbounds(coordinate, direction, word) {
  let length = word.length;
  let newCoordinate = coordinate;
  
  while (length--) {
    if (!isCoordinateInbounds(newCoordinate)) return false;

    newCoordinate = getNextCoordinate(newCoordinate, direction);
  }

  return true;
}

/**
 * Return a valid coordinates and direction for word to be placed in board
 * @param {string} word 
 */
function getInboundsVector(word) {
  let coordinate = getRandomCoordinate(config.length);
  let direction = getRandomDirection();

  while (!isWordInbounds(coordinate, direction, word)) {
    coordinate = getRandomCoordinate(config.length);
    direction = getRandomDirection();
  }

  return { coordinate, direction };
}

/**
 * Checks if a word within bounds can be placed without replacing existing letters
 * @param {object} coordinate 
 * @param {string} direction 
 * @param {string} word 
 * @param {array} board 
 */
function canPlaceWord(coordinate, direction, word, board) {
  if (!isWordInbounds(coordinate, direction, word)) return false;

  let newCoordinate = coordinate;

  for (let i = 0; i < word.length; i++) {
    if (board[newCoordinate.y][newCoordinate.x] !== 0 && board[newCoordinate.y][newCoordinate.x] !== word[i]) {
      return false;
    }

    newCoordinate = getNextCoordinate(newCoordinate, direction);
  }

  return true;
}

/**
 * Fisher-Yates shuffle - returns randomized array
 * @param {array} array 
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.random() * i | 0;

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

/**
 * Return direction and starting coordinate if possible, otherwise false
 * @param {object} coordinate 
 * @param {string} word 
 * @param {number} letterPosition 
 * @param {array} board 
 */
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

/**
 * Places word on board and saves coordinates in directory
 * @param {object} vector 
 * @param {string} word 
 * @param {array} board 
 * @param {object} directory 
 */
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

/**
 * Returns a valid vector accounting overwriting letters, otherwise false
 * @param {string} word 
 * @param {array} board 
 * @param {object} directory 
 */
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

/**
 * Creates a randomized board
 */
function createDynamicBoard() {
  const board = createBoard(config.length);
  const directory = {};
  const words = sortWordsByLength(getRandomWords());
  const firstWord = words.shift();
  let attempts = 5;
  let times = 0;


  // if first word, place anywhere inbounds
  const firstWordVector = getInboundsVector(firstWord);
  placeWordAndSaveCoordinates(firstWordVector, firstWord, board, directory);

  // if not first word, connect to placed words
  while (words && attempts) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const validWordVector = getValidWordVector(word, board, directory);

      if (validWordVector) {
        placeWordAndSaveCoordinates(validWordVector, word, board, directory);
        words.splice(i, 1);
      }
    }

    attempts--;
  }

  // fill empty space with random letters
  board.forEach((row, y) => {
    row.forEach((value, x) => {
      if (!value) board[y][x] = getRandomLetter();
    })
  })
  
  return board;
}

function getRandomNumber(start, end) {
  return ((Math.random() * (end - start + 1)) | 0) + start;
}

function getRandomLetter() {
  return String.fromCharCode(getRandomNumber(97, 122));
}

// random words library
// real random words function
// if can't create board within attempts, get new words and retry
// const board = createDynamicBoard();
// console.log(board);
