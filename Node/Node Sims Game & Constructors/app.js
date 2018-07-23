/* IIFE - Immediately Invoked Function Expression */
(function runGame() {
  /* Load in dotenv */
  require('dotenv').config();

  /* Import fs */
  var fs = require('fs');

  /* Import inquirer */
  var inquirer = require('inquirer');

  /* Import our Character constructor */
  var Character = require('./constructors/simChar');

  /* Holder for our Sim */
  var yourSim = {};

  /* Holder for all saved games */
  var saveGame = [];

  /* Function to read our saved game info */
  function readSave() {
    /* if save file exists, let's read it */
    if (fs.existsSync('saveChar.json')) {
      /* read save file */
      fs.readFile('saveChar.json', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        /* if there's data in the file, parse it */
        if (data) {
          saveGame = JSON.parse(data);
        }
        /* send saved data to loadGame function */
        loadGame(saveGame);
      });
    } else {
      /* just send nothing to load game function */
      loadGame([]);
    }
  }

  /* ============================= */

  /* Load up a saved game (takes in saved character array from saveChar.json) */
  function savedGame(savedCharDataArr) {
    var charNameArr = [];
    /* Read all current saved characters and push their names into array to be picked from */
    for (var i = 0; i < savedCharDataArr.length; i++) {
      charNameArr.push(savedCharDataArr[i].name);
    }
    /* push a create new character option */
    charNameArr.push('Create a new character');

    inquirer
      .prompt([
        {
          name: 'characterName',
          message: 'Pick a saved character',
          type: 'list',
          choices: charNameArr
        }
      ])
      .then(function(selectedChar) {
        /* If you select pick a new character, let's go to newGame and create a new character */
        if (selectedChar.characterName === 'Create a new character') {
          newGame();
        } else {
          /* Else let's load up that saved character's info */
          var loadedChar = {};

          /* Loop through saved characters and pull out name we selected */
          for (var i = 0; i < savedCharDataArr.length; i++) {
            if (savedCharDataArr[i].name === selectedChar.characterName) {
              loadedChar = savedCharDataArr[i];
            }
          }
          /* Pass info into new Character to get our methods back */
          yourSim = new Character(loadedChar.name, parseInt(loadedChar.age));

          /* Load up our saved attributes */
          yourSim.saveId = loadedChar.saveId;
          yourSim.hairColor = loadedChar.hairColor;
          yourSim.health = loadedChar.health;
          yourSim.bankAcct = loadedChar.bankAccount;
          yourSim.music.songsListenedTo = loadedChar.music;

          /* Print our stats so we know more about our character */
          yourSim.printCharStats();

          /* Play Sim */
          playSim();
        }
      });
  }
  /* ============================= */

  /* NEW GAME FUNCTION */
  function newGame() {
    /* Create a new player */
    inquirer
      .prompt([
        {
          name: 'name',
          message: 'What is your character\'s name?',
          type: 'input',
          default: 'Doctor Flan, Medicine Woman'
        },
        {
          name: 'age',
          message: 'How old is your character? (Any age between 7 and 70)',
          type: 'input',
          default: 10,
          validate: function(value) {
            if (!isNaN(value) && parseInt(value) >= 7 && parseInt(value) <= 70) {
              return true;
            }
            console.log('Wrong age! Read the instructions!');
            return false;
          }
        }
      ])
      .then(function(newCharDeets) {
        /* set yourSim to a new Character object, passing in name and age */
        yourSim = new Character(newCharDeets.name, parseInt(newCharDeets.age));

        /* randomize some attributes for your sim */
        yourSim.setAttributes();

        /* Autosave your character, send playSim as callback function */
        yourSim.saveGame(false, playSim);
      });
  }

  /* ============================= */

  /* Function used to push user towards loading a saved user or starting a new character */
  function loadGame(gameInfo) {
    /* If file from json was NOT empty, let's pass that into load up our characters */
    if (gameInfo.length > 0) {
      /* pass game info into our savedGame function */
      savedGame(gameInfo);
    } else {
      /* otherwise let's start a new character */
      newGame();
    }
  }

  /* ============================= */

  /* Function used to actually play with our characters */
  var playSim = function() {
    inquirer
      .prompt([
        {
          name: 'activity',
          type: 'list',
          message: 'What do you want to do?',
          choices: ['Chillax (Listen to music)', 'Eat', 'Potty', 'Save Game', 'Save Game and Quit', 'Restart Game']
        }
      ])
      .then(function(activityPicked) {
        /* Use switch case to determine what method we'll be running */
        switch (activityPicked.activity) {
        case 'Chillax (Listen to music)':
          yourSim.chillax(playSim);
          break;
        case 'Eat':
          yourSim.eat(playSim);
          break;
        case 'Potty':
          yourSim.goPotty(playSim);
          break;
        case 'Save Game':
        /* Save game and keep playing */
          yourSim.saveGame(false, playSim);
          break;
        case 'Save Game & Quit':
        /* Save game and quit */
          yourSim.saveGame(true, playSim);
          break;
        case 'Restart Game':
        /* Go back to the beginning */
          readSave();
          break;
        }
      });
  };
  // Run this immediately
  readSave();
})();
