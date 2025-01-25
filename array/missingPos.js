/*
Question: Find the first missing positive integer in an unsorted array.
*/

function firstMissingPositive(nums) {
  const numSet = new Set(nums.filter((num) => num > 0));
  let missing = 1;

  while (numSet.has(missing)) {
    missing++;
  }

  return missing;
}

const array = [3, 4, -1, 1];
const result = firstMissingPositive(array);
console.log(result); // Output: 2

/*
Approach:
1. Filter positive numbers into Set
2. Initialize counter from 1
3. Keep incrementing until missing number found
4. Return first missing number

Time: O(n)
Space: O(n)
*/
