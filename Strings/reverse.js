// Function to reverse the words in a sentence
function reverseWords(sentence) {
  // Step 1: Split the sentence into words
  const words = splitSentence(sentence);

  // Step 2: Reverse the array of words
  const reverseWords = reverseArray(words);

  // Step 3: Join the reversed words into a sentence
  return joinWords(reverseWords);
}

// Split the sentence into words
function splitSentence(sentence) {
  let words = [];
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === " ") {
      words.push(word);
      word = "";
    } else {
      word += char;
    }
  }
  if (word !== "") {
    words.push(word);
  }

  return words;
}

// Reverse the array of words
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

// Join the reversed words into a sentence
function joinWords(words) {
  let result = "";

  for (let index = 0; index < words.length; index++) {
    result += words[index];

    if (index < words.length - 1) {
      result += " ";
    }
  }

  return result;
}

console.log(reverseWords("Hello world this is JavaScript")); // Output: "JavaScript is this world Hello"

// Approach:
// 1. Split the sentence into words using `splitSentence` function.
// 2. Reverse the array of words using `reverseArray` function.
// 3. Join the reversed words into a sentence using `joinWords` function.
