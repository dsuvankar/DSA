function validPalindrome(string) {
  // Convert string to lowercase and remove non-alphanumeric characters
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = string.length - 1;

  // Check characters from both ends towards the center
  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Test the function with an example
console.log(validPalindrome("A man, a plan, a canal: Panama"));

/*
Approach:
1. Convert the input string to lowercase.
2. Remove all non-alphanumeric characters.
3. Initialize two pointers, one at the start (left) and one at the end (right) of the string.
4. Compare characters at the left and right pointers.
5. If they are not the same, return false.
6. Move the pointers towards the center and repeat the comparison.
7. If all characters match, return true.
*/
