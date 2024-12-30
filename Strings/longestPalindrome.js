// Function to find the longest palindromic substring
function longestPalindrome(string) {
  let start = 0;
  let end = 0;

  // Iterate through string
  for (let i = 0; i < string.length; i++) {
    const len1 = expandAroundCenter(i, i, string); // Odd length
    const len2 = expandAroundCenter(i, i + 1, string); // Even length

    const maxLength = Math.max(len1, len2);

    // Update start and end
    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  return string.substring(start, end + 1);
}

// Expand around center to find the length of the palindrome
function expandAroundCenter(left, right, s) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"

// Approach:
// 1. Iterate through each character in the string and consider it as the center of a palindrome.
// 2. Expand around the center for both odd and even length palindromes using `expandAroundCenter` function.
// 3. Update the start and end indices of the longest palindrome found.
// 4. Return the longest palindromic substring.
