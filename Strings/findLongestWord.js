function findLongestWord(sentence) {
  let longest = "";
  let current = "";

  // Iterate through sentence
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
