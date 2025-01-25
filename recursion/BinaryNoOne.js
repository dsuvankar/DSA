/*
Problem Statement:
Generate all binary strings of length N where no consecutive 1's are allowed.
The strings should be returned in an array.
*/

function generateString(N, current = "", result = []) {
  if (!Number.isInteger(N) || N <= 0) {
    return [];
  }
  if (current.length === N) {
    result.push(current);
    return;
  }
  generateString(N, current + "0", result);

  if (current[current.length - 1] !== "1") {
    generateString(N, current + "1", result);
  }

  return result;
}

console.log(generateString(1));

/*
Approach:
1. Input Validation:
   - Check if N is a valid positive integer

2. Base Case:
   - When current string length equals N, add to result

3. Recursive Steps:
   - Always try adding '0'
   - Add '1' only if previous digit isn't '1'
   - Build string by concatenation

4. Time Complexity: O(2^n)
   Space Complexity: O(n) for recursion stack, O(2^n) for storing results
*/
