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
  wordsLeftToMatch: 10
};

config = {
  length: 10,
  directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
  words: ["rosetty", "dejeune", "pollans", "hooded", "sedgier", "suivez", "spool", "gley", "lingo", "endued", "ablush", "simmers", "warmen", "dredges", "ectasis", "rules", "outvies", "mistune", "icers", "bibbers", "agama", "nemesia", "hokes", "filly", "nichers", "bondman", "souls", "favors", "hights", "saluki", "vali", "madrone", "infarct", "fallow", "groping", "quiver", "jauped", "peek", "manse", "niobous", "paca", "neaps", "catchy", "dodman", "kinging", "bulbar", "marbled", "easels", "hili", "menses", "thwack", "kooked", "basher", "brawl", "pawkily", "jemmy", "worms", "chummy", "topped", "peals", "dysuria", "harmine", "caller", "bowels", "vendors", "remercy", "ironic", "mackled", "outburn", "crest", "weer", "older", "giant", "kybosh", "seemer", "teffs", "corsned", "sledded", "hornbug", "clips", "coronet", "academe", "seps", "murk", "satire", "bonzer", "serge", "prims", "wrier", "couvert", "writ", "enzyme", "arctiid", "valete", "gleying", "arbors", "ceramic", "airier", "bismuth", "helixes", "reclaim", "priced", "epopt", "wrought", "flossy", "domes", "gruffly", "zingels", "peag", "through", "ducked", "liquors", "rectos", "tenor", "rheboks", "bruises", "amrits", "wobble", "quean", "vends", "poverty", "pultan", "jeff", "outfox", "kitenge", "spasmic", "dimpled", "bone", "brownie", "redfish", "corses", "crock", "duds", "eldins", "ingates", "mosey", "minters", "fullish", "rabbity", "witchen", "scrotal", "byssine", "lantana", "ungum", "demises", "rembled", "fÍtes", "airn", "guider", "pronely", "parotic", "jazzer", "ranker", "annexed", "unturfs", "pickles", "snook", "roarie", "pope", "somas", "saroses", "misease", "hooray", "jelly", "penial", "mangles", "enterer", "legger", "inbred", "rover", "manitou", "creeshy", "stuff", "poor", "snouty", "contras", "fearing", "venges", "lauf", "scrunch", "sorehon", "goggles", "booted", "coggles", "cashews", "cicada", "reaves", "alongst", "leaked", "pinny", "objured", "scuta", "rambles", "oulongs", "lichee", "cubs", "bazouki", "blood", "bunyas", "radulae", "cimices", "gulfing", "bleakly", "atingle", "unpaid", "macers", "winder", "fuse", "caravan", "crosses", "darafs", "witters", "pavage", "wodges", "weems", "helper", "faeries", "levy", "decoyed", "stawed", "obtest", "torero", "tempt", "frankly", "helps", "dragged", "cendre", "belamy", "ricker", "trains", "giddy", "fasten", "naans", "propine", "fyrd", "chevet", "blandly", "stiff", "hastate", "curers", "qualms", "sanest", "pumps", "exines", "ephebus", "cardecu", "hery", "teacup", "mured", "uncolt", "journo", "escrows", "battue", "shrift", "unbinds", "synch", "sputum", "ower", "shend", "daimios", "harrow", "atimy", "odeums", "graves", "touted", "close", "twain", "nerd", "fluty", "troade", "pratts", "bedsit", "bajan", "xylol", "gurjun", "modesty", "dirempt", "uncoped", "reallot", "modus", "veinlet", "agaze", "baetyls", "showier", "pausers", "outspan", "laggins", "exhedra", "globule", "tressed", "ratlin", "shoaly", "jingoes", "brigs", "lomenta", "cupman", "discase", "revisit", "beadmen", "welfare", "kanehs", "bavin", "footy", "madding", "cymbal", "create", "firer", "econut", "pies", "ribbing", "coddled", "harelds", "adaptor", "evict", "agony", "guild", "marts", "plookie", "kabuki", "scena", "kernels", "pagris", "slicken", "sorrow", "ghouls", "coiners", "sholom", "aglee", "stub", "stear", "rouging", "wiggles", "reast", "delible", "holey", "crabs", "rampers", "avow", "emcees", "lyceums", "mammoth", "eldings", "wraps", "warfare", "mamilla", "umwhile", "hassars", "sopors", "affords", "unsped", "soughs", "bismar", "venues", "smaltos", "urenas", "flixes", "inure", "hottish", "trundle", "garbos", "wowed", "axon", "nymphet", "clipt", "keying", "cellist", "drip", "reglets", "gheraos", "ritts", "hatrack", "syndets", "pyralid", "foamily", "marmot", "enhance", "swingy", "torsade", "grayer", "bijou", "shophar", "pitting", "nutted", "scog", "prowest", "hole", "talpa", "lulled", "outwear", "pravity", "darken", "sonar", "dormice", "rustled", "immane", "shereef", "lucent", "grille", "dhak", "threats", "gusto", "seducer", "mintier", "disyoke", "mormaor", "pasts", "mimmest", "vesical", "zonoid", "flaxen", "fluid", "samiti", "mosques", "sturts", "terbium", "dirige", "posher", "bipedal", "onside", "undock", "strunts", "gladdie", "miens", "promo", "spitted", "teaing", "galuths", "pierces", "pacific", "caret", "chalets", "benzole", "wolvish", "ossify", "outtop", "underdo", "vidame", "mapped", "stroppy", "forrad", "upcoil", "bezels", "supreme", "generic", "premier", "murex", "shotes", "manage", "tutti", "sapan", "ream", "billowy", "darkled", "anan", "discoid", "pulse", "bright", "warmish", "cithern", "chagans", "squires", "wooer", "centers", "ghees", "dabbler", "peeve", "sunhat", "walked", "herms", "alphas", "evited", "lichees", "sailor", "lawsuit", "merman", "welsh", "rigolls", "postil", "thivels", "enfix", "totals", "twifold", "ledgier", "gondola", "dotes", "ghosty", "retrims", "shriech", "agnames", "gapings", "sullies", "which", "babiche", "vacuous", "spyings", "partway", "redwing", "eerier", "reheel", "gyving", "vellons", "hemline", "unhoard", "pyets", "reft", "within", "resiner", "peaty", "boggier", "auras", "prickly", "tiddley", "hules", "muddles", "badly", "secrets", "repo", "carpels", "guffaw", "neps", "outtops", "elude", "spiking", "guilt", "protons", "ulcer", "byte", "rickle", "girdles", "handle", "bungy", "tendre", "notions", "manËges", "limbeck", "showily", "agnosia", "douc", "oblongs", "massy", "shuttle", "minxes", "langaha", "unrakes", "boomer", "dogmen", "yorkers", "gather", "syntony", "aplasia", "stow", "washer", "flake", "both", "excuser", "retches", "flats", "bolt", "whoring", "diluted", "smocks", "bagel", "smelter", "fungi", "setose", "bridoon", "teenier", "unrip", "terce", "blunges", "gleemen", "overlay", "surface", "fusil", "contort", "jess", "maximal", "reutter", "oyster", "fibrous", "prootic", "taller", "same", "tussock", "embower", "best", "opts", "unhorse", "tabulae", "sheikhs", "cloacae", "josephs", "chasm", "wore", "fussy", "bricole", "trigons", "wallets", "cavels", "kerned", "infolds", "tongues", "flattie", "etui", "gazing", "osculum", "mirk", "medium", "pacos", "shmocks", "tythed", "sucks", "orate", "bidents", "tells", "bundles", "rawer", "minos", "capitan", "gauges", "bostryx", "scorers", "jugging", "hornet", "gaze", "kinemas", "ironman", "blowed", "worry", "quieten", "spathic", "sixtes", "abstain", "depone", "shorter", "hugy", "wetting", "landed", "ephah", "lazes", "dromes", "coxing", "oilcans", "mights", "putchuk", "brace", "villan", "slowish", "momzer", "riders", "yammers", "pieties", "novity", "sakers", "flours", "truces", "curing", "fixed", "slender", "spelk", "tapa", "attaint", "ackee", "height", "betas", "ferule", "damars", "xenium", "tricksy", "slobber", "giusto", "waverer", "tores", "inputs", "loused", "pupated", "wootz", "smooted", "joes", "ginning", "querist", "headily", "ullings", "seiners", "tosser", "classis", "whydah", "fleas", "ungrown", "ewes", "foreman", "strig", "skate", "bestead", "escot", "freemen", "bakes", "gigolos", "waster", "endmost", "dude", "saggard", "touses", "warsle", "acetone", "coaches", "fondled", "alohas", "debouch", "canoe", "selling", "modists", "meatier", "birsy", "sojas", "vifdas", "contain", "raiser", "dozier", "exalted", "corsac", "upjets", "strain", "gelidly", "receive", "wedder", "harmost", "compeer", "pelage", "antlers", "sulci", "pindari", "amphora", "woodier", "pogge", "aweto", "heed", "iambist", "hymning", "starves", "leasts", "rovers", "goolies", "ropier", "lottery", "trot", "tighter", "unipeds", "pawa", "every", "creeper", "fablers", "aidful", "revied", "tidiest", "saruses", "miny", "stoner", "mudras", "flowers", "subdean", "torque", "nyes", "crisply", "soldado", "haikai", "carping", "oracles", "darning", "hullos", "seeps", "tinful", "mobled", "pratie", "faerie", "rinses", "dight", "momma", "gluey", "crypts", "tweedle", "bevels", "calmed", "sylvan", "percent", "gigues", "agues", "doggrel", "elytrum", "partake", "molines", "zooids", "tweer", "pours", "shent", "coky", "gurnet", "verrel", "primmer", "beamily", "skysail", "epos", "threne", "malt", "esparto", "snoots", "kecking", "clowns", "sind", "bongoes", "bogan", "sinning", "murages", "shaps", "pavan", "tais", "rusk", "hernia", "salaam", "gownboy", "coquet", "airs", "boffing", "noseys", "shoots", "lupulin", "club", "thorpes", "certs", "garvie", "nilgaus", "then", "sweeney", "embowed", "kiddied", "vaults", "bibbed", "badger", "censure", "paws", "untruth", "rook", "spoiled", "shaft", "latish", "humpty", "ekkas", "qanats", "rivel", "ormer", "bodger", "idlesse", "jugged", "swats", "loupes", "caliver", "furfurs", "looking", "volas", "nuraghe", "paved", "remix", "muons", "kurvey", "dorky", "leman", "samosa", "snorers", "heel", "atoner", "corners", "wapped", "grocery", "gallop", "warsted", "barley", "tansy", "siping", "snee", "mallow", "bleaks", "bowpots", "regard", "amomums", "undines", "palaces", "mooped", "whiff", "stiffs", "scaling", "pimple", "droning", "monism", "galore", "slidden", "jimpy", "coddles", "notchy", "misstep", "meows", "selles", "swealed", "perron", "bordure", "mirs", "tilled", "hogties", "gorsy", "bidarka", "ladder", "bonnets", "frogman", "duads", "winze", "girded", "elector", "pawnees", "meddles", "bulrush", "loric", "mitre", "wrasse", "scarfed", "induce", "regulo", "intuse", "effort", "tenuity", "boaked", "intuit", "indabas", "nabob", "eaglet", "bespits", "pights", "waffler", "keltie", "upgrew", "vocalic", "chlorin", "toting", "boas", "yonker", "ripest", "pretzel", "scrappy", "zenith", "moils", "machine", "bolo", "gazel", "hokiest", "acquit", "jitters", "tracts", "graals", "unknit", "bridler", "sordine", "ride", "ridded", "largen", "unbind", "fossula", "modi", "utopism", "engirds", "grouser", "fort", "swound", "nesters", "picric", "rybat", "mousier", "derv", "gape", "wileful", "condole", "stomata", "enderon", "schnaps", "dash", "stalled", "jammers", "lugging", "gayals", "dagga", "mimic", "poly", "coining", "emmet", "keeves", "savaged", "nala", "reests", "sheaf", "lubras"]
}

/**
 * Return random words (dummy function)
 */
function getRandomWords() {
  const words = shuffle(config.words).splice(0, 10);
  console.log(words);

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

// random words library
// real random words function
// if can't create board within attempts, get new words and retry
const board = createDynamicBoard();
console.log(board);
