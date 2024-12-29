function mergeAlternately(str1, str2) {
  let i = 0,
    j = 0;

  let merged = [];

  while (i < str1.length && j < str2.length) {
    merged.push(str1[i]);
    i++;
    merged.push(str2[j]);
    j++;
  }

  while (i < str1.length) {
    merged.push(str1[i]);
    i++;
  }

  while (j < str2.length) {
    merged.push(str2[j]);
    j++;
  }

  return merged.join("");
}

console.log(mergeAlternately("abc", "pqr"));
