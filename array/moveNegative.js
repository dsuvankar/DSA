function moveNeg(arr) {
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      swap(arr, left, i);
      left++;
    }
  }

  return arr;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++;
  j--;
}

const arr = [3, -1, 2, -3, 5, -4];
console.log(moveNeg(arr));
const array2 = [0, 1, 0, 3, 12];
