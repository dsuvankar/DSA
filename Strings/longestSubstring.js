function lengthOfLongestSubstring(s) {
  let map = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right]; //a

    if (map[char] !== undefined && map[char] >= left) {
      left = map[char] + 1;
    }
    map[char] = right;

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
