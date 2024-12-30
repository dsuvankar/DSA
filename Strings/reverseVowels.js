// Set of vowels for quick lookup
const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

// Function to reverse vowels in a string
function reverseVowels(str) {
  // Initialize two pointers
  let left = 0;
  let right = str.length - 1;

  // Convert string to array for easy swapping
  let arr = str.split("");

  // Loop until the two pointers meet
  while (left < right) {
    // Check if characters at pointers are vowels
    const isLeftVowels = vowels.has(arr[left]);
    const isRightVowels = vowels.has(arr[right]);

    // If both are vowels, swap them
    if (isLeftVowels && isRightVowels) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }

    // Move left pointer if not a vowel
    if (!isLeftVowels) {
      left++;
    }

    // Move right pointer if not a vowel
    if (!isRightVowels) {
      right--;
    }
  }

  // Join array back to string and return
  return arr.join("");
}

// Test cases
console.log(reverseVowels("leetcode")); // Output: "leotcede"
console.log(reverseVowels("IceCreAm")); // Output: "AceCrEmI"

// Approach:
// 1. Use two pointers, `left` starting from the beginning and `right` from the end of the string.
// 2. Convert the string to an array to facilitate swapping.
// 3. Iterate until the two pointers meet.
// 4. Check if the characters at both pointers are vowels.
// 5. If both are vowels, swap them and move both pointers inward.
// 6. If the left character is not a vowel, move the left pointer to the right.
// 7. If the right character is not a vowel, move the right pointer to the left.
// 8. Join the array back into a string and return it.
