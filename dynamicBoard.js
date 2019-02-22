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

const gameState = {
  firstClick: null,
  classRowFirst: null,
  classColFirst: null,
  classColSecond: null,
  classRowSecond: null,
  secondClick: null,
  wordString: "",
  wordArr: null,
  wordsLeftToMatch: 10,
  timer: null,
  countdownTime: 3 * 60,
};

config = {
  length: 10,
  directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
  // words: ['Babel','Backend','Binary','Bind','Bitwise','operators','Block','BOM','Bool','Boolean','Bracket','Branch','Brooks','Browse','Bug',"Class","Classpath","Closure","CLR","COBOL",'Compile','Compiler','Complementarity','Compute','Concat','Concatenation','Constant','Constructor','Debugging','Declaration','Declare','Decompiler','Decrement','Equal','Error','Escape','Flag','For','Foreach','Forth','Function','GitHub','Glitch','Increment','Interpreter','Invalid','Iteration','Java','JavaScript','JSON','Loop','Label','Language','Lambda','Markup','Math','Middleware','Module','modulo','nan','nodejs','nodelist','null','Object','Operand','Operator','Parenthesis','Parse','Pascal','PHP','Polymorphism','Pop','Programmer','Public','PureBasic','Push','Python','React','Recompile','Recursion','Recursive','Regex','expression','Relational','Religion','REM','Remark','Repeat','Reserved','Resource','Return','Reverse','Revision','Routine','Routing','RPG','Rust','Scratch','SDK','Separator','Sequence','Server','Server','Servlet','SGML','Shell','Shift','Signedness','Simulated','SMIL','Snippet','SOAP','Socket','Software','Source','SourceForge','Sparsity','SPL','SQL','Stack','Standard','Statement','Stdin','Stubroutine','Stylesheet','Subprogram','Submit','Subscript','Superclass','Switch','statement','sugar','Syntax','System','Engineer','Language','Unary','Undefined','variable','Unit','Unshift','Value','Var','Variable','Vector','VIM','Visual','Studio','Void','While','Whole','WML','Workspace','XML','XNA','XOR','XSL','buffering','index','ruby','rails','gem','float','constant','global','dictionary','tuple','array','loop','for','token','oop','native','component','mount','lifecycle','scope','block','margin','border','style','css','sass','document','window','connect','store','withRouter','redux','materialize','bootstrap','swift','java','html','javascript','ecmascript']
  words: ["Babel", "Backend", "Binary", "Bind", "Bitwise", "Block", "BOM", "Bool", "Boolean", "Bracket", "Branch", "Brooks", "Browse", "Bug", "Class", "Closure", "CLR", "COBOL", "Compile", "Compute", "Concat", "Declare", "Equal", "Error", "Escape", "Flag", "For", "Foreach", "Forth", "GitHub", "Glitch", "Invalid", "Java", "JSON", "Loop", "Label", "Lambda", "Markup", "Math", "Module", "modulo", "nan", "nodejs", "null", "Object", "Operand", "Parse", "Pascal", "PHP", "Pop", "Public", "Push", "Python", "React", "Regex", "REM", "Remark", "Repeat", "Return", "Reverse", "Routine", "Routing", "RPG", "Rust", "Scratch", "SDK", "Server", "Server", "Servlet", "SGML", "Shell", "Shift", "SMIL", "Snippet", "SOAP", "Socket", "Source", "SPL", "SQL", "Stack", "Stdin", "Submit", "Switch", "sugar", "Syntax", "System", "Unary", "Unit", "Unshift", "Value", "Var", "Vector", "VIM", "Visual", "Studio", "Void", "While", "Whole", "WML", "XML"],
}

/**
 * Return random words (dummy function)
 */
function getRandomWords() {
  let wordsArray = [];
  const words = shuffle(config.words).slice(0, 10);
  for (let index = 0; index < words.length; index++) {
      wordsArray[index] = words[index].toLowerCase()
  }
  return wordsArray
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
 * Creates empty board of 0's
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
  const { x, y } = coordinate;

  const vectors = {
    'N':  () => ({ x: x, y: y - 1 }),
    'S':  () => ({ x: x, y: y + 1 }),
    'E':  () => ({ x: x + 1, y: y }),
    'W':  () => ({ x: x - 1, y: y }),
    'NE': () => ({ x: x + 1, y: y - 1 }),
    'SE': () => ({ x: x + 1, y: y + 1}),
    'SW': () => ({ x: x - 1, y: y + 1}),
    'NW': () => ({ x: x - 1, y: y - 1 }),
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
  let coordinate;
  let direction;

  do {
    coordinate = getRandomCoordinate(config.length);
    direction = getRandomDirection();
  } while (!isWordInbounds(coordinate, direction, word));

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
    const value = board[newCoordinate.y][newCoordinate.x];

    // if cell is not empty and letter doesn't match
    if (value !== 0 && value !== word[i]) return false;

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

  // try all directions
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const oppositeDirection = getOppositeDirection(direction);
    let startingCoordinate = coordinate;
    let position = letterPosition;

    // find starting coordinate
    while (position--) {
      startingCoordinate = getNextCoordinate(startingCoordinate, oppositeDirection);
    }

    // if word can be placed, return starting coordinate and direction
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
    const letter = word[i];
    board[newCoordinate.y][newCoordinate.x] = letter;

    if (directory[letter]) {
      directory[letter].push(newCoordinate);      
    } else {
      directory[letter] = [newCoordinate];
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
      const coordinates = shuffle(directory[letter].slice(0));

      // iterate over possible coordinates and find valid vector
      for (let j = 0; j < coordinates.length; j++) {
        const vector = getValidVector(coordinates[j], word, i, board);

        // if valid vector, return
        if (vector) return vector;
      }
    } 
  }

  // if no valid vector, return false
  return false;
}

/**
 * Returns random number between start and end inclusive
 * @param {number} start 
 * @param {number} end 
 */
function getRandomNumber(start, end) {
  return ((Math.random() * (end - start + 1)) | 0) + start;
}

/**
 * Returns random lowercase letter
 */
function getRandomLetter() {
  return String.fromCharCode(getRandomNumber(97, 122));
}

/**
 * Creates a randomized board
 */
function createDynamicBoard() {
  // continues until a completed dynamic board is created
  while (true) {
    const randomWords = sortWordsByLength(getRandomWords());
    let sameWordsAttempts = 5;

    // continues with same set of random words 
    while (sameWordsAttempts--) {
      // most inner loop - same starting word placement
      const board = createBoard(config.length);
      const directory = {};
      const words = randomWords.slice(0);
      const firstWord = words.shift();
      let sameStartAttempts = 15;
      
      // if first word, place anywhere inbounds
      const firstWordVector = getInboundsVector(firstWord);
      
      placeWordAndSaveCoordinates(firstWordVector, firstWord, board, directory);
    
      // if not first word, continue trying with remaining words
      while (words && sameStartAttempts--) {
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          const validWordVector = getValidWordVector(word, board, directory);

          if (validWordVector) {
            placeWordAndSaveCoordinates(validWordVector, word, board, directory);
            words.splice(i, 1);
          }
        }
      }

      // fill empty space with random letters
      board.forEach((row, y) => {
        row.forEach((value, x) => {
          if (!value) board[y][x] = getRandomLetter();
        })
      })

      // if all words have been used, return completed board
      if (words.length === 0) {
        gameState.wordArr = randomWords;
        return board;
      } 
    }
  }
}

