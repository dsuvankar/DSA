function mergeSort(arr) {
  // Base case: if the array has 1 or no elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort both halves
  const arr1 = mergeSort(left);
  console.log("left", arr1);
  const arr2 = mergeSort(right);
  console.log("right", arr2);

  // Merge the sorted halves
  return mergeSortedArrays(arr1, arr2);
}

// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  // Merge elements from both arrays in sorted order
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1, if any
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2, if any
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(mergeSort([3, 5, 8, 5, 99, 1]));

// Steps:
// 1. Split the array into two halves until each half has one or no elements.
// 2. Recursively sort each half.
// 3. Merge the sorted halves by comparing elements from both halves and adding the smaller element to the merged array.
// 4. Continue merging until the entire array is sorted.
