function insertionSort(arr) {
  // Loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the key at its correct position
    arr[j + 1] = key;
  }

  return arr;
}

const array = [64, 25, 12, 22, 11];
console.log(insertionSort(array));

// Steps:
// 1. Iterate through the array starting from the second element.
// 2. Compare the current element with the previous elements.
// 3. Shift elements to the right to make space for the current element if it is smaller.
// 4. Insert the current element at the correct position.
// 5. Repeat until the entire array is sorted.
