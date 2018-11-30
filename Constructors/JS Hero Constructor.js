
function Build(name, job, gender, age, strength, hp, superP){
    this.cName = name,
    this.cJob = job,
    this.cGender = gender,
    this.cAge = age,
    this.cStrength = strength,
    this.cHp = hp,
    this.cSuper = superP
    this.printStats = function(){
        // loop through object with "for in"
        for(var key in this){
            if (typeof this[key] !== "function"){
                console.log(this[key]);
            };
        }
        console.log("++++++++++++++++++++");        
    },
    this.IsAlive = function(){
        if(this.cHp>0){
            console.log(this.cName + " Is Alive");
        } else{
            console.log(this.cName + " Is Dead");
        }
        console.log("++++++++++++++++++++");
    },
    this.LevelUp = function(){
        this.cAge++;
        this.cStrength+=5;
        this.cHp+=25;
    },
    this.Attack = function(target){
        // the "target" parameter passes along the object name as an argument in the call
        // this basically lets you update two objects at the same time using the parameter
        target.cHp -= this.cStrength;
        console.log(this.cName + " has attacked " + target.cName + " for " + this.cStrength);
        console.log("++++++++++++++++++++");
    }
}

var joe = new Build("Joe", "plumber", "male", 25, 35, 100, "Magic Plunger");
var jill = new Build("Jill", "developer", "female", 33, 45, 110, "Mind Control");

joe.printStats();
jill.printStats();

joe.IsAlive();
jill.IsAlive();

// joe.LevelUp();
// jill.LevelUp();

jill.Attack(joe);

joe.printStats();
jill.printStats();