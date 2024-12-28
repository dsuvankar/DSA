function quicksort(arr) {
  // Base case: if the array has less than 2 elements, it's already sorted
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];

  // Partition the array into two halves
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort both halves and concatenate with the pivot
  return [...quicksort(left), pivot, ...quicksort(right)];
}

const arr = [10, 80, 30, 90, 40, 50, 70];

console.log(quicksort(arr));

// Steps:
// 1. Choose a pivot element from the array.
// 2. Partition the array into two halves: left (elements less than pivot) and right (elements greater than pivot).
// 3. Recursively apply the same process to the left and right halves.
// 4. Concatenate the sorted left half, pivot, and sorted right half to get the final sorted array.
