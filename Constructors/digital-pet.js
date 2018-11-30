function DigitalPal(name, hungry, sleepy, bored, age){
    this.name = name,
    this.hungry = hungry,
    this.sleepy = sleepy,
    this.bored = bored,
    this.age = age,
    this.print = function(){
        for(var key in this){
            if (typeof this[key] !== "function"){
                console.log(this[key]);
            };
        }
        console.log("++++++++++++++++++++");        
    },
    this.feed = function(){
        if(this.hungry === true){
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true; 
        } else {
            console.log("No thanks! I'm full.");
        }
        console.log("++++++++++++++++++++");
    },
    this.sleep = function(){
        if(this.sleepy === true){
            console.log("Zzzzzzz");
            this.sleepy=false;
            this.bored=true;
            this.increaseAge();
        } else{
            console.log("No way! I'm not tired.");
        }
        this.increaseAge();
        console.log("++++++++++++++++++++");   
    },
    this.play = function(target){
        if(this.bored=true){
            console.log("Yay! Let's play!");
            this.bored=false;
            this.hungry=true;
        } else{
            console.log("Not right now. Later?");
        }
        console.log("++++++++++++++++++++");
    },
    this.increaseAge = function(){
        this.age+=1;
        console.log("Happy Birthday to me! I am "+ this.age +" old!");
    }
}

var dog = new DigitalPal("Doug", false, false, true, 0);

// add new parameters to object
dog.outside = false;

dog.bark = function(){
    console.log("Woof, Woof!");
};

dog.goOutside = function(){
    if(this.outside === false){
        console.log("Yay! I love the outdoors!");
        this.outside=true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
};

dog.goInside = function(){
    if(this.outside === true){
        console.log("Do we have to? Fine...");
        this.outside=false;
    } else {
        console.log("I'm already inside...");
    }
};

var cat = new DigitalPal("KK", false, false, true, 0);

cat.houseCondition = 100;

cat.meow = function(){
    console.log("Meow, Meow!");
};

cat.destroyFurniture = function(){
    if(this.houseCondition < 1){
        console.log("Seriously, You Have Already Ruined The House");
    } else{
        this.houseCondition-=10;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
        this.bored = false;
        this.sleepy = true;
    }
};

cat.buyNewFurniture = function(){
    this.houseCondition+=50;
    console.log("Are you sure about that?");
}

dog.print();
cat.print();

dog.feed();
dog.goInside();
cat.destroyFurniture();
