function Unique(str) {
  const seen = new Array(256).fill(false);
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (seen[charCode] === false || charCode === 32) {
      seen[charCode] = true;
      result += str[i];
    }
  }

  console.log(result);
}

// Test the function
Unique("I love Javascript");
