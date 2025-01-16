function findEquilibriumIndex(arr) {
  let totalSum = arr.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];

    if (totalSum === leftSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

const arr = [1, 3, 5, 2, 2];
const index = findEquilibriumIndex(arr);
console.log(index);
