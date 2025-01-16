function nonDecreasing(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return i + 1;
    }
  }

  return true;
}

const arr = [6, 5, 4, 3, 5, 2, 1];
console.log(nonDecreasing(arr));
