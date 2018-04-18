/* Import our dependencies */
var fs = require('fs');
var uuidv4 = require('uuid/v4');

/* Import our music constructor */
var Music = require('./listen');

/* Character constructor */
var Character = function(name, age) {
  /* Let's set our vitals */
  this.saveId = uuidv4();
  this.name = name;
  this.age = age;
  this.hairColor;
  this.health = 0;
  this.bored = true;
  this.hungry = false;
  this.thirsty = false;
  this.potty = false;
  this.bankAcct = 0;
  /* Instantiate a new Music constructor for our character */
  this.music = new Music();
};

/* Add save game method that takes in arguments on whether or not we want to quit the game and playSim is our callback function */
Character.prototype.saveGame = function(quitGame, playSim) {

  /* Store all of our character's data to make saving easier */
  var saveData = {
    saveId: this.saveId,
    name: this.name,
    age: this.age,
    hairColor: this.hairColor,
    health: this.health,
    bored: this.bored,
    hungry: this.hungry,
    thirsty: this.thirsty,
    potty: this.potty,
    bankAccount: this.bankAcct,
    music: this.music.songsListenedTo
  };

  /* Read our save file */
  fs.readFile('saveChar.json', 'utf8', function(err, result) {
    var savedArr = [];
    var returnedData = [];

    /* if there is data, parse it */
    if (result) {
      returnedData = JSON.parse(result);
      console.log('save found');
    }

    /* if there is no returned data, let's just set our save game to our current character in an array for structure */
    if (returnedData.length === 0) {
      savedArr = [saveData];
    } else {

      /* if there IS returned data, then let's set it to our savedArray */
      savedArr = returnedData;
      var foundSave = false;

      /* Loop over our saved array and check to see if our current character already has it's data saved by comparing saveId's */
      savedArr.forEach(function(character, i) {
        if (character.saveId === saveData.saveId) {
          foundSave = true;
          savedArr[i] = saveData;
        }
      });

      /* If we couldn't find a saveGame id in our character, then let's just add our new character to the end of our character array */
      if (!foundSave) {
        /* use array concat method */
        savedArr = returnedData.concat(saveData);
      }
    }

    /* Let's save all of our character data to saveChar.json */
    fs.writeFile('saveChar.json', JSON.stringify(savedArr), function(err) {
      if (err) {
        console.log('SOMETHING WENT WRONG!');
        return err;
      }
      /* If I want to quit the game, then stop from running */
      if (quitGame) {
        return false;
      } else {
        /* Else let's run playSim (callback function we sent over from app.js) */
        playSim();
      }
    });
  });
};
/* End saveGame method */

/* print characters */
Character.prototype.printCharStats = function() {
  console.log('\n===== YOUR CHARACTER STATS =====\n');
  for (var key in this) {
    if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
      console.log(key + ': ' + this[key]);
    }
    if (typeof this[key] === 'object') {
      console.log(key + ': ' + this[key].songsListenedTo);
    }
  }
  console.log('\n===== END STATS =====\n');
};

/* randomly set some attributes */
Character.prototype.setAttributes = function() {
  var hairChoices = ['Black', 'Silver', 'Blonde', 'Beach Blonde', 'Brown', 'Red', 'Hot Pink'];
  this.hairColor = hairChoices[Math.floor(Math.random() * hairChoices.length)];
  this.health = 100 - Math.floor(Math.random() * this.age);
  this.bankAcct = 2500 + Math.floor(Math.random() * this.age) * 4;
  this.printCharStats();
};

/* Run chillax, which costs money, take in playSim as callback function */
Character.prototype.chillax = function(playSim) {

  /* Play spotify fee */
  this.bankAcct -= Math.floor(Math.random() * 3);

  /* run look for playlist method from music constuctor and pass playSim down as callback */
  this.music.lookForPlaylist(playSim);

  /* music is good for the health */
  this.health += 3;

  /* too much chillaxing makes you bored */
  this.bored = true;

};

/* Eat some food */
Character.prototype.eat = function(playSim) {
  this.hungry = false;
  this.bankAcct -= Math.floor(Math.random() * 15) + 4;
  this.potty = true;
  this.printCharStats();
  playSim();
};

/* Go to the bathroom */
Character.prototype.goPotty = function(playSim) {
  this.bankAcct -= Math.floor(Math.random() * 6) + 1;
  this.potty = false;
  this.bored = true;
  this.printCharStats();
  playSim();
};


module.exports = Character;
