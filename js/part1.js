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
