/**
 * Question: Given a non-negative integer, find its square root using binary search.
 * If the perfect square root doesn't exist, return the floor value of the square root.
 *
 * Note:
 * - Don't use any built-in exponent function or operator
 * - Return only integer part
 */

function sqrt(num) {
  let left = 0;
  let right = num;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSq = mid * mid;

    if (midSq === num) {
      return mid;
    } else if (midSq < num) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(sqrt(15));

/**
 * Approach:
 * 1. Use binary search in range [0, number]
 * 2. For each mid point, compute square and compare with target
 * 3. If square is equal, return mid
 * 4. If square is less, save result and search right half
 * 5. If square is more, search left half
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
