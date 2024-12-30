function lengthOflastWord(str) {
  let count = 0;

  // Iterate from the end of the string
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " && count === 0) {
      continue;
    } else if (str[i] === " " && count > 0) {
      break;
    } else {
      count++;
    }
  }

  return count;
}

// Test the function with examples
console.log(lengthOflastWord("   fly me   to   the moon  "));
console.log(lengthOflastWord("luffy is still joyboy"));

/*
Approach:
1. Initialize a counter to zero.
2. Iterate from the end of the string towards the beginning.
3. Skip trailing spaces until the first non-space character is found.
4. Count the characters of the last word until a space is encountered.
5. Return the count of the last word.
*/
