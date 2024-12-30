// Function to remove vowels from a string
function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    let isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === char) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      result += char;
    }
  }

  return result;
}

console.log(removeVowels("hey how are you")); // Output: "hy hw r y"

// Approach:
// 1. Iterate through each character of the string.
// 2. Check if the character is a vowel by comparing it with each character in the `vowels` string.
// 3. If the character is not a vowel, add it to the result string.
// 4. Return the result string.
