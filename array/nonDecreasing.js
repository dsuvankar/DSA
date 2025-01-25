/*
Question: Find the index where array stops being non-decreasing
*/

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

/*
Approach:
1. Iterate through array
2. Compare adjacent elements
3. Return index + 1 where sequence breaks
4. Return true if array is completely non-decreasing

Time: O(n)
Space: O(1)
*/
