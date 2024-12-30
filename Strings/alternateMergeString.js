function mergeAlternately(str1, str2) {
  let i = 0,
    j = 0;
  let merged = [];

  // Merge characters alternately from both strings
  while (i < str1.length && j < str2.length) {
    merged.push(str1[i]);
    i++;
    merged.push(str2[j]);
    j++;
  }

  // Append remaining characters from str1
  while (i < str1.length) {
    merged.push(str1[i]);
    i++;
  }

  // Append remaining characters from str2
  while (j < str2.length) {
    merged.push(str2[j]);
    j++;
  }

  return merged.join("");
}

// Test the function with an example
console.log(mergeAlternately("abc", "pqr"));

/*
Approach:
1. Initialize two pointers for both input strings.
2. Initialize an array to store the merged characters.
3. Iterate through both strings and alternately add characters to the merged array.
4. If one string is exhausted, append the remaining characters from the other string.
5. Join the merged array into a single string and return it.
*/
