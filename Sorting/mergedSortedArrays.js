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

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
console.log("Merged array:", mergeSortedArrays(sortedArray1, sortedArray2));

// Steps:
// 1. Compare the first elements of both arrays.
// 2. Add the smaller element to the merged array.
// 3. Move the pointer of the array from which the element was taken.
// 4. Repeat until all elements from both arrays are added to the merged array.
