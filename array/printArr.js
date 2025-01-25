/*
Question: Print an array in sorted order
*/

function printArr() {
  const arr = [2, 3, 4, 1, 0];

  console.log(arr.sort());
}

printArr();

/*
Approach:
1. Use built-in sort method
2. Print sorted array

Time: O(n log n)
Space: O(1)
*/
