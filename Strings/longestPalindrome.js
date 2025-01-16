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

function expandAroundCenter(left, right, s) {
  // Expand around center
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}
