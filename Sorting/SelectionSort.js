function selectionSort(arr) {
  // Loop through the entire array
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    // Find the minimum element in the remaining unsorted array
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      swap(arr, i, minIndex);
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
console.log(selectionSort(arr));

// Steps:
// 1. Iterate through the array to find the minimum element.
// 2. Find the minimum element in the unsorted part of the array.
// 3. Swap the minimum element with the first unsorted element.
// 4. Move the boundary of the sorted and unsorted parts one element to the right.
// 5. Repeat until the entire array is sorted.
