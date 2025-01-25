/*
Question: Check if str2 is a subsequence of str1
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      j++;
    }
    i++;
  }

  return j === str2.length;
}

// Example usage:
console.log(isSubsequence("abcdef", "ace")); // Output: true
console.log(isSubsequence("abcdef", "aec")); // Output: false

/*
Approach:
1. Use two pointers (i for str1, j for str2)
2. Increment j only when characters match
3. Increment i for every iteration
4. Check if all characters in str2 were found

Time: O(n) where n is length of str1
Space: O(1)
*/
