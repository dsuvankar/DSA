function checkAnagram(str1, str2) {
  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, "");
  str1 = normalize(str1);
  str2 = normalize(str2);

  const charCount = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    }
  }

  return true;
}

const check = checkAnagram("Listen", "Silent");

console.log(check);
