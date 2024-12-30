function rotate(string, goal) {
  // Check if lengths of strings are different
  if (string.length !== goal.length) {
    return false;
  }

  // Rotate the string and check if it matches the goal
  for (let i = 0; i < string.length; i++) {
    let rotated = string.slice(i) + string.slice(0, i);
    if (goal === rotated) {
      return true;
    }
  }

  return false;
}

// Test the function with examples
console.log(rotate("abcde", "cdeab"));
console.log(rotate("abcde", "abced"));

/*
Approach:
1. Check if the lengths of the input string and goal string are different. If so, return false.
2. Iterate through the input string.
3. For each iteration, create a rotated version of the string by slicing and concatenating.
4. Check if the rotated string matches the goal string.
5. If a match is found, return true.
6. If no match is found after all rotations, return false.
*/
