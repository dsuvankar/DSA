function firstMissing(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  return n + 1;
}

const arr = [3, 4, -1, 1];

console.log(firstMissing(arr)); // Expected output: 2
