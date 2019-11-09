// Create a function that determins if a string has unique values
// Upercase and lowercase are considered unique

const stringFalse = "adfajpovi;nepave";
const stringTrue = "abcdefg";


// Fastest
// Time = O(n)
// Space = O(n)
// Note: Set only allows uniques
const isUniqueSet = (stringText) =>{
    return new Set(stringText).size === stringText.length;
}

console.log("False: ", isUniqueSet(stringFalse));
console.log("True: ", isUniqueSet(stringTrue));

// Faster
// Time Complexity - O (n log (n)
// Space Complexity - O(n)
const isUnique = (stringText) =>{
    // sorts string into array so duplicates are next to each other
    let sorted = stringText.split("").sort();
    for(let i = 1; i<sorted.length; i++){
        if(sorted[i] === sorted[i-1]) return false;
    }
    return true;   
}

console.log("False: ", isUnique(stringFalse));
console.log("True: ", isUnique(stringTrue));



// Alt Method 
// Time Complexity - O(n^2)
// Space Complexity - O(1)
const findUnique = (stringText) =>{

    for(let i = 0; i<stringText.length; i++){

        // checks if forwared loop and reverse loop match
        if(i !== stringText.lastIndexOf(stringText[i])) {
                return false;
        } else {
                return true;
                // break;
        }
    }

}



console.log("False: ", findUnique(stringFalse));
console.log("True: ", findUnique(stringTrue));



// Find If Strings Are The Same
const stringCheck = (string1, string2) =>{
    
    let isMatch = true;
    let stringArrayOne=string1.split("");
    let stringArrayTwo=string2.split("");
    

    for(let i =0; i < stringArrayOne.length; i++){
      if(stringArrayOne[i] !== stringArrayTwo[i]) isMatch = false;
    }
    
    return isMatch;

  }

stringCheck("abc", "abc");
stringCheck("abc", "bcd");
