/*
Question: Given an array of integers and a target sum, find all pairs of elements 
that add up to the target sum.
*/

function findPairSum(arr, target) {
  const pair = [];
  const seen = new Set();

  for (let num of arr) {
    let complementNum = target - num;

    if (seen.has(complementNum)) {
      pair.push([complementNum, num]);
    }

    seen.add(num);
  }

  return pair;
}

const arr = [1, 5, 7, -1, 5];
const target = 6;
const result = findPairSum(arr, target);
console.log(result); // Output: [[1, 5], [7, -1], [1, 5]]

/*
Approach:
1. Create a Set to store visited numbers
2. For each number:
   - Calculate complement (target - current number)
   - Check if complement exists in Set
   - If exists, we found a pair
   - Add current number to Set
3. Return all pairs

Time: O(n)
Space: O(n)
*/
