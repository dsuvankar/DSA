// Function to find the longest common prefix among an array of strings
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.substring(0, ans.length - 1);

      if (ans === "") {
        return "";
      }
    }
  }

  return ans;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

// Approach:
// 1. Initialize the answer with the first string in the array.
// 2. Iterate through the rest of the strings and update the answer by comparing it with each string.
// 3. If the current string does not start with the answer, reduce the answer by one character from the end.
// 4. Return the longest common prefix.
