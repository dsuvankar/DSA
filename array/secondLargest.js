/**
 * Question: Find the second largest element in an array of integers.
 * If no second largest exists, return -Infinity.
 *
 * Note:
 * - Array may contain duplicates
 * - Return -Infinity if no second largest exists
 */

function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const array = [3, 5, 1, 4, 2];
console.log(secondLargest(array));

/**
 * Approach:
 * 1. Keep track of largest and second largest elements
 * 2. Iterate through array once
 * 3. If current element larger than largest, update both
 * 4. If current element smaller than largest but larger than second largest, update second largest
 * 5. Handle duplicates by checking inequality with largest
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
