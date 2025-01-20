function moveZeroesToEnd(arr) {
  let nonZeroIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
}

// Example usage:
const array = [0, 1, 0, 3, 12];
console.log(moveZeroesToEnd(array)); // Output: [1, 3, 12, 0, 0]

function approach2(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] !== 0) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
  }

  return arr;
}

console.log(approach2(array));
