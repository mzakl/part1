// File  : part1.js
// Desc  : provide answers for part1 for JSAT2
// Author: Mohamad Akl
// Date  : 08/10/2026

// Build an array
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(`Array: ${numbers}`);

// Sort the array in ascending order
// const sortedNumbersA = numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(`Ascending Order Sorted Array: ${sortedNumbersA}`);

// Insert three numbers 19, 23, 30 in to the sorted array.
// Insert 19 and 23 to the end of the array and 30 to the beginning of the array
// sortedNumbersA.push(19);
// sortedNumbersA.push(23);
// sortedNumbersA.unshift(30);

// Display the sorted array after adding the three numbers.
// console.log(`Array with New Numbers Added: ${sortedNumbersA}`);

// Sort the new array in ascending order
// const newSortedNumbersA = sortedNumbersA.sort(function (a, b) {
//   return a - b;
// });
// console.log(`Array with Newly Added Numbers Sorted: ${newSortedNumbersA}`);

// Remove number 8
// newSortedNumbersA.splice(2, 1);

// Remove number 31
// newSortedNumbersA.splice(10, 1);

// console.log(`Array with Numbers Removed: ${newSortedNumbersA}`);

/////////// Search Functions //////////

// ******* Sequential Search ********
// Create the sequentialSearch function.
// parameter: array to search and key to be found
// returns: the index of the element or -1 if not found

function sequentialSearch(searchArray, target) {
  // Set the found value to -1 (not found)
  // If found >= 0, the target was found.
  let found = -1;
  for (i = 0; i < searchArray.length; i++) {
    if (searchArray[i] == target) {
      found = i;
      break;
    }
  }
  return found;
}

// Set the value we are searching for.
//let value = 25; // found value
//let value = 60; // not found value
console.log(`Value: ${value}`);

// Call the sequentialSearch function
let result = sequentialSearch(numbers, value);

// Output results
if (result == -1) {
  console.log(`The value of ${value} was not found`);
} else {
  console.log(`The value of ${value} was found at index ${result}`);
}
