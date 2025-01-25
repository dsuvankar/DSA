/*
Question: Find the first missing positive integer in an array
*/

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

/*
Approach 1 (Cyclic Sort):
1. Place each number at its correct position (i at index i-1)
2. Scan array to find first mismatch
3. Return first missing positive number

Approach 2 (Sum Method):
1. Calculate expected sum of first n numbers
2. Filter positive numbers
3. Compare actual sum with expected sum
4. Return missing number

Time: O(n)
Space: O(1)
*/

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
