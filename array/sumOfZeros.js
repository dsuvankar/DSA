/**
 * Question: Given a binary matrix (matrix with only 0s and 1s), find the sum of all 1s
 * that are adjacent (top, bottom, left, right) to 0s in the matrix.
 * Count each 1 only once even if it's adjacent to multiple 0s.
 *
 * Note:
 * - Consider only direct adjacent cells (not diagonals)
 * - Matrix can be of any size
 */

function sumOfZero(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        //top
        if (i - 1 >= 0 && array[i - 1][j] === 1) {
          total += array[i - 1][j];
        }

        //bottom
        if (i + 1 < array.length && array[i + 1][j] === 1) {
          total += array[i + 1][j];
        }

        //left
        if (j - 1 >= 0 && array[i][j - 1] === 1) {
          total += array[i][j - 1];
        }

        //right
        if (j + 1 < array[i].length && array[i][j + 1] === 1) {
          total += array[i][j + 1];
        }
      }
    }
  }

  return total;
}

const inputMatrix1 = [
  [1, 0],
  [0, 1],
];

const inputMatrix2 = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 0, 0],
  [1, 0, 1],
];

console.log(sumOfZero(inputMatrix1));
console.log(sumOfZero(inputMatrix2));

/**
 * Approach:
 * 1. Iterate through each cell in matrix
 * 2. When 0 is found, check all four adjacent positions
 * 3. For each valid adjacent position, if it contains 1, add to total
 * 4. Handle boundary conditions for edge cells
 * 5. Return final sum
 *
 * Time Complexity: O(m*n) where m,n are matrix dimensions
 * Space Complexity: O(1) as we use only constant extra space
 */
