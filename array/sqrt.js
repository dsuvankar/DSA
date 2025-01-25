/**
 * Question: Given a perfect square number, find its square root using linear search.
 * Return -1 if the number is not a perfect square.
 *
 * Note:
 * - Don't use any built-in exponent function or operator
 * - Return -1 if perfect square root not found
 */

function sqrt(num) {
  for (let i = 0; i < num / 2; i++) {
    if (i * i === num) {
      return i;
    }
  }

  return -1;
}

console.log(sqrt(196));

/**
 * Approach:
 * 1. Iterate from 0 to number/2
 * 2. For each number i, check if i*i equals target
 * 3. If found, return i
 * 4. If not found, return -1
 *
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 */
