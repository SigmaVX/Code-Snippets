// Write a script that prints the numbers 1 to 100 in the console. But for multiples of three, print Fizz instead of the number. For multiples of five, print Buzz. For numbers which are multiples of both three and five, print FizzBuzz.

fizzBuzz = () => {

    fizz=[];

    for(i=1; i<101; i++){
        if(i%3 === 0){
            if (i%3 === 0 && i%5 === 0){
                fizz.push("Fizz-Buzz");
            } else {
            fizz.push("Fizz");
            }
        } else if (i%5 === 0) {
            if (i%3 === 0 && i%5 === 0){
                fizz.push("Fizz-Buzz");
            } else {
            fizz.push("Buzz");
            }
        } else {
            fizz.push(i);
        }
    }

    fizz.join(" ");
    console.log(fizz);
};

fizzBuzz();