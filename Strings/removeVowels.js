function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    isVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === char) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      result += char;
    }
  }

  return result;
}

console.log(removeVowels("hey how are you"));
