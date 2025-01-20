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
