function checkAnagram(str1, str2) {
  // Normalize the strings by converting to lowercase and removing non-alphanumeric characters
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");
  str1 = normalize(str1);
  str2 = normalize(str2);

  const charCount = {};

  // Count characters in the first string
  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check characters in the second string
  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    }
  }

  return true;
}

// Test the function with an example
const check = checkAnagram("Listen", "Silent");
console.log(check);

/*
Approach:
1. Normalize both input strings by converting them to lowercase and removing non-alphanumeric characters.
2. Initialize an object to count the occurrences of each character in the first string.
3. Iterate through the first string and update the character count.
4. Iterate through the second string and check if each character exists in the character count object.
5. If any character in the second string is not found in the character count object, return false.
6. If all characters match, return true.
*/
