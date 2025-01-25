/*
Question: Find intersection of two arrays (common elements)
*/

function intersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const value of set1) {
    if (set2.has(value)) {
      result.push(value);
    }
  }
  return result;
}

const array1 = [1, 2, 2, 1];
const array2 = [2, 2, 3, 4];
const result = intersection(array1, array2);
console.log(result); // Output: [2]

/*
Approach:
1. Convert arrays to Sets to remove duplicates
2. Iterate through first Set
3. Check if element exists in second Set
4. Add common elements to result array

Time: O(n)
Space: O(n)
*/
