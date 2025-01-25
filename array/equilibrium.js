/*
Question: Find equilibrium index where sum of elements on left equals sum on right
*/

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

/*
  Approach:
  1. Calculate total sum
  2. Track left sum while iterating
  3. Compare leftSum with remaining sum (totalSum - current)
  4. Return index when sums are equal
  5. Return -1 if no equilibrium found

  Time: O(n)
  Space: O(1)
  */
