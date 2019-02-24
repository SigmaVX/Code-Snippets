// Tonys Code 
// Key Steps 
// ========================================================
//  1. Create An Escape For Recusion Loop When Array Lenght = 1
//  2. Set a Random Pivot Number and Left/Right Arrays - These Will Change With Cach Loop
//  3. Run an array loop looking at each number and if it is higher/lower - pusing into left/right arrays
//  4. Run the recusion by concating the left, pivot, and right in a return line.
// ========================================================

// Rutgers Steps
// define function quicksort (list)

// Select a pivot value
// pivot = select_pivot_from list

// // Create array of values less than/greater than pivot
// left  = [element in list where element < pivot]
// right = [element in list where element > pivot]

// // Recursively sort left/right, and insert pivot in its final position
// return quicksort (left) + pivot + quicksort (right)


const quickSort = (array, side) => {
  console.log("Sorting: ", array, " ", side);

  // Array Is Fully Broken Down
  if(array.length < 2) {
    return array;
  }

  let pivot = array[0];
  console.log("Pivot Number Is: ", pivot);

  let right = [];
  let left = [];

  // Important - i is set to 1 as we pulled out the first number as the pivot
  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivot){
      left.push(array[i]);
      console.log("Array Item Pushed To Left: ", array[i]);
      console.log("Left Array: ", left);
    } else {
      right.push(array[i]);
      console.log("Array Item Pushed To Right: ", array[i]);
      console.log("Right Array: ", right);

    }   
  }

  console.log("Last Line: ", quickSort(left, "left").concat(pivot, quickSort(right, "Right")));
  return quickSort(left, "left").concat(pivot, quickSort(right, "Right"))

}

let myArray = [8,6,3,88,1,2,6,33];
console.log(quickSort(myArray, "Starting"));



// Rutgers Version
// modified from https://gist.github.com/ttezel/3124434
var unsorted = [];
for (var index = 0, t = 10; index < t; index++) {
  unsorted.push(Math.round(Math.random() * t));
}


function quickSort(array, side) {
  console.log(array, side);
  // our exit condition, as this is running recursively
  if (array.length <= 1) {
    return array;
  }

  // get random pivot element (and remove from array to add back in later)
  var pivot = array.splice(Math.floor(Math.random() * array.length), 1);

  // create left array (elements <= pivot), and right array (elements > pivot)
  var left = [];
  var right = [];

  // loop through array and create left/right
  array.forEach(function(el) {
    if (el <= pivot) {
      left.push(el);
    }
    else {
      right.push(el);
    }
  });

  // get the result of recursively sorting the left array (using quicksort), then join that with the pivot and the
  // result of recursively sorting the right array (using quicksort).
  // equivalent of `return quicksort(left) + pivot + quicksort (right);` in the pseudocode
  return quickSort(left, "left").concat(pivot, quickSort(right, "right"));
}

console.log("Pre Sort:", unsorted.join(" "));
var sorted = quickSort(unsorted);
console.log("Post Sort:", sorted.join(" "));
console.log("DONE!");



// Medium Version - Alt Code
const quickSort = list => {
  if (list.length < 2){
    return list;
  } 
    
  let pivot = list[0];
  let left  = []; 
  let right = [];


  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
      left.push(list[i]);
    else
      right.push(list[i]);
  }
  return [
    ...quickSort(left), 
    pivot, 
    ...quickSort(right)
  ];
};

let myArray = [2,6,3,88,1,2,6,33];
console.log(quickSort(myArray));


// Rutgers Alt Version
var arr = [];
for (var index = 0, t = 400; index < t; index++) {
  arr.push(Math.round(Math.random() * t));
}

// var arr = [5, 3, 1, 6, 4, 2, 3, 7];

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[left]; // items[Math.floor((right + left) / 2)];
  var i = left - 1;
  var j = right + 1;

  while (i < j) {
    i++;
    j--;

    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(items, i, j);
    }
  }
  return j;
}

function quickSort(items, left, right) {
  // console.log('calling quickSort(items, ', left, ', ', right, ')');
  var index;

  if (right > left) {
    index = partition(items, left, right);
    // console.log('index: ', index);

    quickSort(items, left, index);
    quickSort(items, index + 1, right);
  }

  return items;
}

console.log("Pre Sort:", arr.join(" "));
var result = quickSort(arr, 0, arr.length - 1);
console.log("Post Sort:", result.join(" "));
console.log("DONE!");




