// Task: create a function that takes converts a deeply nested array 
// to a flat array that perserves the order of items in the array

// Steps
//  1. Create blank array - to hold flat array
//  2. Create helper function for recusion (so we don't reset our flat array)
//  3. Create for loop Inside Helper with if/else
//  4. Use helper function again If array and add to flat array if not 



const deepArray = [[[[1],2],3],[4],[],[[5]]];

let counterOne = 0;
let counterTwo = 0;

// Recursive Approach
const flatArray = (nestedArray) =>{

    const newArray = [];

    const helper = (array) => {
         for(let i=0; i<array.length; i++){
             let element = array[i];
             
            // Checks If Is An Array 
            if(Array.isArray(element)){
                // Runs Helper To Unpack
                helper(element);
            } else {
                // Adds To Flat Array
                newArray.push(element);
            }
        }
    }

    // Call On Helper To Start Unpacking Array
    helper(nestedArray);

    // Return Array
    return newArray;
}

console.log(flatArray(deepArray));


