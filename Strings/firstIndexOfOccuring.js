function firstIndexOfOccuring(string, target) {
  for (let i = 0; i < string.length - target.length; i++) {
    if (string.substring(i, i + target.length) === target) {
      return i;
    }
  }

  return -1;
}

console.log(firstIndexOfOccuring("sadbutsad", "sad"));
