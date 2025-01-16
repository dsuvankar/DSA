function findPairSum(arr, target) {
  const pair = [];
  const seen = new Set();

  for (let num of arr) {
    let complementNum = target - num;

    if (seen.has(complementNum)) {
      pair.push([complementNum, num]);
    }

    seen.add(num);
  }

  return pair;
}

const arr = [1, 5, 7, -1, 5];
const target = 6;
const result = findPairSum(arr, target);
console.log(result); // Output: [[1, 5], [7, -1], [1, 5]]
