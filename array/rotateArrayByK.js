function rotateArrByK(arr, k) {
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}

function reverse(arr, i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(rotateArrByK(arr, 3));
