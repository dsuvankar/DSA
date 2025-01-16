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
