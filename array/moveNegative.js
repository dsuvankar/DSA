/**
 * Question: Given an array of positive and negative numbers, arrange them in such a way that
 * all negative integers appear before all the positive integers in the array
 * without using any additional data structure.
 *
 * Note:
 * - The order of appearance should be maintained.
 * - Array may contains 0.
 */

function moveNeg(arr) {
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      swap(arr, left, i);
      left++;
    }
  }

  return arr;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++;
  j--;
}

const arr = [3, -1, 2, -3, 5, -4];
console.log(moveNeg(arr));
const array2 = [0, 1, 0, 3, 12];

/**
 * Approach:
 * 1. Use two-pointer technique with 'left' pointer to track position for next negative number
 * 2. Iterate through array with 'i' pointer
 * 3. When negative number found, swap it with element at 'left' position
 * 4. Increment 'left' pointer after swap
 * 5. Continue until array is fully traversed
 *
 * Time Complexity: O(n) where n is length of array
 * Space Complexity: O(1) as we are not using any extra space
 */
