/*
Question: Move all zeros in an array to the end while maintaining the relative 
order of non-zero elements.
*/

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
console.log(moveZeroesToEnd(array));
console.log(approach2(array));

/*
Approach 1:
1. Use two-pointer technique
2. Move all non-zero elements to front
3. Fill remaining with zeros

Approach 2:
1. Use swap technique
2. Swap zeros with next non-zero number
3. Continue until end

Time: O(n)
Space: O(1)
*/

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
