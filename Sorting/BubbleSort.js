function bubbleSort(arr) {
  // Loop through the entire array
  for (let i = 0; i < arr.length - 1; i++) {
    // Compare adjacent elements and swap if they are in the wrong order
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

// Function to swap two elements in the array
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(arr));

// Steps:
// 1. Iterate through the array multiple times.
// 2. Compare adjacent elements and swap if they are in the wrong order.
// 3. Each pass through the array moves the next largest element to its correct position.
// 4. Repeat until the entire array is sorted.
