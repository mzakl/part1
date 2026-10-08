// File  : part1.js
// Desc  : provide answers for part1 for JSAT2
// Author: Mohamad Akl
// Date  : 08/10/2026

// Build an array
const numbers = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(`Array: ${numbers}`);

// Sort the array in ascending order
const sortedNumbersA = numbers.sort(function (a, b) {
  return a - b;
});
console.log(`Ascending Order Sorted Array: ${sortedNumbersA}`);

// Insert three numbers 19, 23, 30 in to the sorted array.
// Insert 19 and 23 to the end of the array and 30 to the beginning of the array
sortedNumbersA.push(19);
sortedNumbersA.push(23);
sortedNumbersA.unshift(30);

// Display the sorted array after adding the three numbers.
console.log(`Array with New Numbers Added: ${sortedNumbersA}`);

// Sort the new array in ascending order
const newSortedNumbersA = sortedNumbersA.sort(function (a, b) {
  return a - b;
});
console.log(`Array with Newly Added Numbers Sorted: ${newSortedNumbersA}`);
