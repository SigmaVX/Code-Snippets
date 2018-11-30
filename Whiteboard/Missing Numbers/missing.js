

// Find the number in the array using binary search

// Good Questions
// Is The Number In Only Once
// Is The Array Sorted
// Do We Know That The Number Is Included

var numbers = [22, 1, 33, 343, 2, 454, 2, 45, 454];

binarySearch = (numbers, searchingFor) =>{
    
    let sortedNumbers = numbers.sort(function(a,b){return a-b});
    console.log(sortedNumbers);
    
    let currentNumber = 0;
    let currentIndex = 0;
    let minIndex = 0;
    let maxIndex = sortedNumbers.length-1;

    if(sortedNumbers.indexOf(searchingFor) === -1){
        console.log("This Number Is Not In The Array");
    } else {

        while(minIndex <= maxIndex){

            currentIndex = Math.floor((minIndex + maxIndex)/2);
            console.log("Midpoint: ", currentIndex);
            currentNumber = sortedNumbers[currentIndex];

            if(currentNumber<searchingFor){
                minIndex=currentIndex + 1;
            } else if(currentNumber>searchingFor){
                maxIndex = currentIndex - 1;
            } else {
                console.log("Your Number Is At: ", currentIndex);
                return currentIndex;
            }
        }
    }
}

binarySearch(numbers, 343);




// Find The Missing Number

var listNumbers = [1,9,3,4,6,7,25,8,2,10];
var missingNumber = 0;
var missingNumbers = [];


let lookFor = (list) =>{

    // Sort The List
    let sortedList = list.sort(function(a,b){return a-b});
        console.log("Sort List:", sortedList);
  
    // Set The Min and Max Value From The Array
    let minNumber = Math.min(...sortedList);
        console.log("Min Number: ", minNumber);
    let maxNumber = Math.max(...sortedList);
        console.log("Max Number: ", maxNumber);
  
    // Do Loop Based On Min & Max Values
    // Note: Change the i++ to match the patern you are looking for
    for(var i=minNumber; i<=maxNumber; i++){
        console.log(i);
        if(sortedList.indexOf(i) === -1){
            missingNumber = i;
            missingNumbers.push(missingNumber);
            console.log("This Number Is Missing: ", missingNumber);
        }
    }

    // Recap results
    if(missingNumbers.length === 0){
        console.log("No Numbers Were Missing");
    } else{
        console.log("All Missing Numbers: ", missingNumbers);
    }
} 

lookFor(listNumbers);