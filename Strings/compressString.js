function compressString(chars) {
  let count = 1;
  let iteration = 0;

  // Iterate through the characters
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else if (count === 1) {
      chars[iteration++] = chars[i];
    } else if (count < 10) {
      chars[iteration++] = chars[i];
      chars[iteration++] = count.toString();
      count = 1;
    } else {
      const s = count.toString().split("");
      chars[iteration++] = chars[i];
      for (let j = 0; j < s.length; j++) {
        chars[iteration++] = s[j];
      }
    }
  }

  return iteration;
}

// Test the function with an example
console.log(
  compressString([
    "a",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
    "b",
  ])
);

/*
Approach:
1. Initialize a counter to keep track of character repetitions.
2. Iterate through the characters of the input array.
3. If the current character is the same as the next character, increment the counter.
4. If the current character is different from the next character:
   a. If the counter is 1, add the character to the result.
   b. If the counter is less than 10, add the character and the counter to the result.
   c. If the counter is 10 or more, split the counter into individual digits and add them to the result.
5. Reset the counter after processing each group of characters.
6. Return the length of the compressed string.
*/
