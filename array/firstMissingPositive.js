function firstMissing(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      let temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;

      console.log("inside while", arr);
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
const arr2 = [0, 1, 2, 3, 4];

console.log(firstMissing(arr));

function approach2(arr) {
  const n = arr.length;
  const sum = (n * (n + 1)) / 2;
  const newArr = arr.filter((item) => item > 0);

  const total = newArr.reduce((acc, curr) => acc + curr, 0);

  if (total === sum) {
    return n + 1;
  } else {
    return sum - total;
  }
}

console.log(approach2(arr2));
