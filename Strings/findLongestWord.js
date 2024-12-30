function findLongestWord(sentence) {
  let longest = "";
  let current = "";

  // Iterate through the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i] || " ";

    // Check for space
    if (char === " ") {
      // Update longest word
      if (longest.length < current.length) {
        longest = current;
      }
      current = "";
    } else {
      // Build current word
      current += char;
    }
  }

  // Final check for longest word
  if (current.length > longest.length) {
    longest = current;
  }

  return longest;
}

// Example usage
console.log(findLongestWord("I love prog in JavaScript"));

/*
Approach:
1. Initialize variables to keep track of the longest word and the current word.
2. Iterate through each character in the sentence.
3. If a space is encountered, compare the current word with the longest word and update if necessary.
4. If a non-space character is encountered, add it to the current word.
5. After the loop, perform a final check to update the longest word if the current word is longer.
6. Return the longest word.
*/
