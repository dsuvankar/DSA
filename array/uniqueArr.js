/**
 * Question: Given an array of integers, modify the array in-place such that all elements become
 * unique by incrementing duplicate elements until they become unique.
 * Return the modified array where no element appears more than once.
 *
 * Note:
 * - You must modify the array in-place
 * - Only increment the numbers to make them unique
 */

function makeUniqueArray(nums) {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    while (seen.has(nums[i])) {
      nums[i]++;
    }

    seen.add(nums[i]);
  }

  return nums;
}

// Example usage
const array = [3, 1, 2, 2, 4, 4];
const result = makeUniqueArray(array);
console.log(result); // Output: [3, 1, 2, 5, 4, 6] (or similar unique numbers)

/**
 * Approach:
 * 1. Use Set data structure to keep track of seen numbers
 * 2. Iterate through array
 * 3. For each number, keep incrementing it until we find a unique number
 * 4. Add the unique number to Set
 * 5. Continue until all numbers are unique
 *
 * Time Complexity: O(n*m) where n is array length, m is max increments needed
 * Space Complexity: O(n) for storing seen numbers
 */
