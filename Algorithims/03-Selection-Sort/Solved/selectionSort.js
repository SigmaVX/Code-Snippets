// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  // grab value of item to be moved before overwriting it
  var temp = items[firstIndex];

  // swap value at first index to be value at second index
  items[firstIndex] = items[secondIndex];

  // set second index to be value of original first index
  items[secondIndex] = temp;
}

function selectionSort(items) {

  var len = items.length;
  var min;

  for (var i = 0; i < len; i++) {

    // set index of minimum to this position
    min = i;

    // check the rest of the array to see if anything is smaller
    for (var j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    // if the current position isn't the minimum, swap it and the minimum
    if (i !== min) {
      swap(items, i, min);
    }
  }

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
