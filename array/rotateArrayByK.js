/**
 * Question: Given an array and a number k, rotate the array to the right by k positions.
 * Modify the array in-place without using extra space.
 *
 * Note:
 * - k can be greater than array length
 * - Modify array in-place
 */

function rotateArrByK(arr, k) {
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}

function reverse(arr, i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(rotateArrByK(arr, 3));

/**
 * Approach:
 * 1. Use reverse algorithm - three step reversal
 * 2. First reverse first k elements
 * 3. Then reverse remaining elements
 * 4. Finally reverse entire array
 * 5. This gives us right rotation by k positions
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
