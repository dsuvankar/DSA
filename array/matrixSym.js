/*
Question: Check if a given matrix is symmetric (matrix equals its transpose)
*/

function isSymmetric(matrix) {
  let n = matrix.length;

  for (let row of matrix) {
    if (row.length !== n) {
      return false;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== matrix[j][i]) {
          return false;
        }
      }
    }
  }

  return true;
}

const matrix1 = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6],
];

const matrix2 = [
  [1, 0, 0],
  [0, 1, 0],
  [1, 0, 1],
];

console.log(isSymmetric(matrix1)); // Output: true
console.log(isSymmetric(matrix2)); // Output: false

/*
Approach:
1. Check if matrix is square (n x n)
2. Compare elements matrix[i][j] with matrix[j][i]
3. Return false if any pair doesn't match
4. Return true if all elements match

Time: O(n²)
Space: O(1)
*/
