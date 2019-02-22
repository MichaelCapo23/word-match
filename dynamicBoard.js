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
<<<<<<< HEAD
  words: ['false','imagine','minute','council','fossil','world','pair','sight','study','person','guard','private','teach','combine','linger','bite','link','ghost','system','dare','smile','uniform','family','fax','number','check','glory','groan','leak','miner','pipe','myth','retired','trouble','acquit','track','wake','module','housing','pour','native','feeling','panic','privacy','shorts','likely','design','reflect','mild','beef','palace','tease','useful','flex','denial','threat','wheat','trace','witch','gem','makeup','tidy','predict','driver','stall','harass','forget','arch','free','index','mist','recruit','bless','cunning','wall','trance','leave','frozen','belt','ignore','roll','article','summary','fantasy','bank','divorce','bracket','deputy','harmony','impound','ash','vague','bread','appoint','failure','injury','helmet','disco','extent','grant','main','senior','heal','summer','price','behave','pupil','suntan','morsel','cellar','ceiling','gun','press','flash','embrace','look','honest','patent','common','differ','indulge','norm','joy','kitchen','gallon','deep','beer','fur','follow','wind','beg','play','glow','flu','craft','straw','pudding','hunter','muscle','mobile','water','debate','scrap','illness','exempt','crash','barrel','tiger','clash','lose','faith','agony','singer','grain','compact','improve','concept','return','trainer','silence','serious','raid','branch','perfect','hang','slow','cereal','budget','chicken','tray','pat','blade','mask','coal','petty','feel','theft','harsh','alarm','galaxy','kidney','alcohol','cope','oak','fat','course','survey','fan','tool','yearn','stop','network','breeze','cinema','terms','term','way','minimum','cruel','reactor','defend','haunt','widen','comment','loan','knife','edge','squeeze','arrow','culture','snarl','calorie','density','acid','stain','inn','safe','cabinet','value','symbol','similar','miss','creed','chase','soap','eat','frown','random','serve','lonely','mud','impulse','station','husband','jacket','table','age','line','explain','applied','swim','flat','west','fate','topple','mirror','hope','linen','sense','engine','screw','agile','fault','corpse','high','cook','stride','purpose','runner','diagram','burial','dealer','equip','tear','member','stuff','thinker','lake','base','irony','bacon','school','skilled','escape','think','justify','old','sweet','hurt','humor','waist','abolish','verdict','chaos','access','insure','corner','fuss','cruelty','thrust','foot','behead','mouse','strip','marsh','march','concert','sin','bay','victory','accent','mean','expand','test','inside','revenge','cause','apple','metal','raise','urge','legend','rung','sodium','scan','dictate','court','pony','horizon','despair','hill','instal','outfit','posture','forward','ballot','soul','bar','swallow','retreat','lung','gift','heroin','stream','floor','cut','origin','duty','pin','long','child','admit','painter','advance','bed','portion','period','zero','ton','extort','coffee','visual','banana','prey','wrestle','carve','art','host','pier','killer','ask','appear','admire','betray','margin','swing','clear','moment','traffic','reject','feed','plane','lineage','program','hostage','pass','maze','anger','crown','eye','fashion','hook','inquiry','field','realize','self','minor','giant','fitness','poetry','breathe','ethics','prince','grow','sniff','curve','wheel','single','promise','battery','pit','lack','tablet','version','refer','forest','silver','punch','heel','bin','tender','symptom','read','reform','clock','bark','tone','bench','berry','string','lighter','role','delete','elite','scholar','rack','ego','central','ground','walk','collar','change','band','unit','slip','tough','bell','ladder','fit','unity','vacuum','bleed','bend','request','slap','contain','pity','slice','cash','hostile','text','gloom','noise','genuine','crop','layer','soil','feature','basket','car','voice','printer','pottery','taste','tent','copper','tycoon','block','jail','bag','bundle','abandon','belly','tax','capital','delay','protest','passion','shy','ruin','sock','valley','decide','rainbow','gown','greet','race','lace','shatter','news','obese','fix','passive','clothes','extract','distant','fog','step','pride','terrify','anxiety','chart','lamb','fever','sleep','scrape','run','chorus','view','account','bald','god','vehicle','tread','tip','plead','lodge','float','answer','knee','smoke','nut','mention','jaw','nose','sink','sigh','house','still','hole','desk','trial','balance','wedding','game','barrier','auditor','poem','quiet','pace','bucket','manual','summit','vain','meadow','supply','pension','visit','flight','remark','mole','eternal','belief','define','pain','cotton','affect','brush','gradual','panel','glasses','rob','elect','absence','rent','lawyer','staff','sweater','embryo','lend','oil','create','quota','percent','brave','hotdog','cow','payment','pierce','occupy','cry','touch','confuse','width','persist','troop','profile','era','baby','plaster','horn','example','impact','grand','stable','channel','feast','spring','nuance','factory','firm','rate','second','unfair','worth','close','courage','vote','measure','tongue','figure','sweep','diet','toss','shame','try','ferry','double','mark','goal','manage','swell','soar','salmon','growth','sun','snuggle','fire','crime','guest','ridge','ear','drill','teacher','ritual','land','cane','choose','bus','video','variant','rugby','coma','north','object','chord','tower','project','grip','spend','medal','policy','noble','frog','retire','grass','dentist','mystery','mass','seminar','chief','quote','exotic','slot','fun','perfume','pot','shoot','army','relieve','sketch','goat','risk','estate','buffet','snap','nuclear','valid','science','award','grimace','push','weak','gate','deny','rabbit','alive','boot','cup','record','polish','glide','deal','marble','gallery','tenant','model','employ','sick','friend','heavy','monster','freeze','surface','degree','need','bang','knot','middle','expose','make','major','divide','sting','referee','carpet','claim','charity','guitar','attic','flawed','banquet','evening','grind','option','dump','clay','iron','deck','carry','brick','modest','steel','thread','review','preach','arm','flag','aware','dialect','format','robot','sticky','eyebrow','silk','drive','south','ethnic','soldier','dragon','rank','import','sharp','pocket','arena','enhance','voyage','chair','shallow','van','user','meaning','fine','dull','peace','crisis','radical','fee','paradox','debt','volcano','notice','hunting','other','include','asylum','ample','tragedy','rare','related','sector','able','deport','asset','bathtub','welcome','peel','place','finger','confine','great','charm','thirsty','wording','pasture','shape','skate','tiptoe','genetic','strong','coin','rubbish','invite','drama','nest','circle','exit','license','brag','ticket','pie','remain','insert','begin','put','custody','lane','regard','defeat','mind','carrot','descent','sand','dilute','convict','snake','coat','aloof','stroke','length','affair','monarch','hiccup','nap','favor','hour','column','help','speaker','infect','dilemma','desert','love','boy','toll','pool','pick','primary','album','finish','buy','abbey','orgy','bake','tumour','monkey','dash','fresh','boat','plain','pack','drum','chimney','thank','head','wine','small','deadly','elbow','pluck','rhythm','ant','beard','deprive','steak','arise','exact','sour','proof','switch','oral','twitch','funeral','bishop','drown','hard','lift','dough','kneel','fox','loud','force','care','fear','drink','roof','half','resign','gasp','bottom','cover','linear','swear','voter','harvest','produce','Bible','wolf','outlet','slime','wash','service','salon','context','apathy','vein','ward','agree','spider','trivial','speech','voucher','soft','worry','battle','lamp','graphic','resist','last','dish','sound','leash','surgeon','live','warning','musical','paper','abuse','ideal','output','mosaic','score','steam','word','sister','catch','snub','stitch','mutual','protect','tap','year','handy','heir','chin','filter','comedy','height','ride','body','regret','cute','whisper','hobby','jest','crevice','disk','picture','basin','large','screen','man','tire','eagle','assault','episode','zone']
  // words: ['babel','backend','binary','bind','bitwise','operators','block','boolean','bracket','branch','browse','class','classpath','closure','cobol','compile','compiler','complementarity','compute','concat','concatenation','constant','constructor','debugging','declaration','declare','decompiler','decrement','equal','error','escape','flag','foreach','forth','function','github','glitch','increment','interpreter','invalid','iteration','java','javascript','json','loop','label','language','lambda','markup','math','middleware','module','modulo','nodejs','nodelist','null','object','operand','operator','parenthesis','parse','pascal','polymorphism','programmer','programming','public','purebasic','python','react','recompile','recursion','recursive','regex','expression','relational','religion','remark','repeat','reserved','resource','return','reverse','revision','routine','routing','scratch','separator','sequence','server','server','servlet','shell','shift','simulated','snippet','socket','software','source','sourceforge','sparsity','stack','standard','statement','stubroutine','stylesheet','subprogram','submit','subscript','superclass','switch','statement','sugar','syntax','system','engineer','language','unary','undefined','variable','unshift','value','variable','vector','visual','studio','void','while','whole','workspace','buffering','index','ruby','rails','float','constant','global','dictionary','tuple','array','token','native','component','mount','lifecycle','scope','block','margin','border','style','document','window','connect','store','withrouter','redux','materialize','bootstrap','swift','java','html','javascript','ecmascript']
=======
  // words: ['Babel','Backend','Binary','Bind','Bitwise','operators','Block','BOM','Bool','Boolean','Bracket','Branch','Brooks','Browse','Bug',"Class","Classpath","Closure","CLR","COBOL",'Compile','Compiler','Complementarity','Compute','Concat','Concatenation','Constant','Constructor','Debugging','Declaration','Declare','Decompiler','Decrement','Equal','Error','Escape','Flag','For','Foreach','Forth','Function','GitHub','Glitch','Increment','Interpreter','Invalid','Iteration','Java','JavaScript','JSON','Loop','Label','Language','Lambda','Markup','Math','Middleware','Module','modulo','nan','nodejs','nodelist','null','Object','Operand','Operator','Parenthesis','Parse','Pascal','PHP','Polymorphism','Pop','Programmer','Public','PureBasic','Push','Python','React','Recompile','Recursion','Recursive','Regex','expression','Relational','Religion','REM','Remark','Repeat','Reserved','Resource','Return','Reverse','Revision','Routine','Routing','RPG','Rust','Scratch','SDK','Separator','Sequence','Server','Server','Servlet','SGML','Shell','Shift','Signedness','Simulated','SMIL','Snippet','SOAP','Socket','Software','Source','SourceForge','Sparsity','SPL','SQL','Stack','Standard','Statement','Stdin','Stubroutine','Stylesheet','Subprogram','Submit','Subscript','Superclass','Switch','statement','sugar','Syntax','System','Engineer','Language','Unary','Undefined','variable','Unit','Unshift','Value','Var','Variable','Vector','VIM','Visual','Studio','Void','While','Whole','WML','Workspace','XML','XNA','XOR','XSL','buffering','index','ruby','rails','gem','float','constant','global','dictionary','tuple','array','loop','for','token','oop','native','component','mount','lifecycle','scope','block','margin','border','style','css','sass','document','window','connect','store','withRouter','redux','materialize','bootstrap','swift','java','html','javascript','ecmascript']
  words: ["Babel", "Backend", "Binary", "Bind", "Bitwise", "Block", "BOM", "Bool", "Boolean", "Bracket", "Branch", "Brooks", "Browse", "Bug", "Class", "Closure", "CLR", "COBOL", "Compile", "Compute", "Concat", "Declare", "Equal", "Error", "Escape", "Flag", "For", "Foreach", "Forth", "GitHub", "Glitch", "Invalid", "Java", "JSON", "Loop", "Label", "Lambda", "Markup", "Math", "Module", "modulo", "nan", "nodejs", "null", "Object", "Operand", "Parse", "Pascal", "PHP", "Pop", "Public", "Push", "Python", "React", "Regex", "REM", "Remark", "Repeat", "Return", "Reverse", "Routine", "Routing", "RPG", "Rust", "Scratch", "SDK", "Server", "Server", "Servlet", "SGML", "Shell", "Shift", "SMIL", "Snippet", "SOAP", "Socket", "Source", "SPL", "SQL", "Stack", "Stdin", "Submit", "Switch", "sugar", "Syntax", "System", "Unary", "Unit", "Unshift", "Value", "Var", "Vector", "VIM", "Visual", "Studio", "Void", "While", "Whole", "WML", "XML"],
>>>>>>> 189942b3ebf277b1514b043ccac83a1a2606a259
}

/**
 * Return random words (dummy function)
 */
function getRandomWords() {
  let wordsArray = [];
<<<<<<< HEAD
  const words = shuffle(config.words).splice(0, 10);
  // for(let index = 0; index < words.length; index++) {
  //     wordsArray[index] = words[index].toLowerCase()
  // }
  return words
=======
  const words = shuffle(config.words).slice(0, 10);
  for (let index = 0; index < words.length; index++) {
      wordsArray[index] = words[index].toLowerCase()
  }
  return wordsArray
>>>>>>> 189942b3ebf277b1514b043ccac83a1a2606a259
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

