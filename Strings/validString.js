function checkAB(str) {
  if (str.length === 0) {
    return "YES";
  }

  if (str[0] !== "a") {
    return "NO";
  }

  if (str.length >= 3 && "abb" === str.substring(0, 3)) {
    return checkAB(str.substring(3));
  } else {
    return checkAB(str.substring(1));
  }
}

// Input
const s = "aabbaab"; // Replace with actual input
const s1 = "aabba";

// Check if the string is valid
console.log(checkAB(s));
console.log(checkAB(s1));
