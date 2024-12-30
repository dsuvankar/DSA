function firstIndexOfOccuring(string, target) {
  // Iterate through the string
  for (let i = 0; i < string.length - target.length; i++) {
    // Check if the substring matches the target
    if (string.substring(i, i + target.length) === target) {
      return i;
    }
  }

  return -1;
}

// Test the function with an example
console.log(firstIndexOfOccuring("sadbutsad", "sad"));

/*
Approach:
1. Iterate through the input string.
2. For each position, check if the substring starting from that position matches the target string.
3. If a match is found, return the starting index.
4. If no match is found after iterating through the string, return -1.
*/
