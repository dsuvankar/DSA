function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const array = [64, 25, 12, 22, 11];
console.log(insertionSort(array));
