function foo(a) {
	var b = 2;

	function bar() {
        var d = 4;
        // console.log("Full Inside: ",a,b,c,d);
        // Cannot see C because it has not yet been declaired
        // Note this can see B becuase this is nested and B was declaired before this ran
    }
    
    bar();
   
    var c = 3;
    // console.log("Inside: ",a,b,c,d);
    // Cannot see D since it is within a different inside scope
}

foo(1);
console.log("Outside: ",a,b,c,d);
// Cannot see a, b, c, or d since its outside the scope bubble
