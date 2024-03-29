// Closures are a way to pass data from outside a functions local scope
// This can be done with a global variable but often is done by nesting functions

function outer() {
    var b = 10;
    var c = 100;
       function inner() {
            
             var a = 20; 
             console.log("a= " + a + " b= " + b);
             a++;
             b++;
        }
       return inner;
    }
    var X = outer();  // outer() invoked the first time
    var Y = outer();  // outer() invoked the second time
    //end of outer() function executions
    
    X(); // X() invoked the first time
    X(); // X() invoked the second time
    X(); // X() invoked the third time
    Y(); // Y() invoked the first time

// You can see the value passed under Scope in Chrome with console.dir()


