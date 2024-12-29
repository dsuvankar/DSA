function lengthOflastWord(str) {
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " " && count === 0) {
      continue;
    } else if (str[i] === " " && count > 0) {
      break;
    } else {
      count++;
    }
  }

  return count;
}

console.log(lengthOflastWord("   fly me   to   the moon  "));
console.log(lengthOflastWord("luffy is still joyboy"));
