// Function to find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  let map = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    if (map[char] !== undefined && map[char] >= left) {
      left = map[char] + 1;
    }
    map[char] = right;

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3

// Approach:
// 1. Use a sliding window approach with two pointers, `left` and `right`.
// 2. Use a map to store the last seen index of each character.
// 3. If a character is repeated within the window, move the `left` pointer to the right of the last seen index of that character.
// 4. Update the maximum length of the substring without repeating characters.
