/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const i = 0;
  for (let k = 0; k < matrix[i].length; k++) {
    if (matrix[i][k] !== 0) {
      sum += matrix[i][k];
      for (let j = i + 1; j < matrix.length; j++) {
        if (matrix[j][k] !== 0) {
          sum += matrix[j][k];
        } else {
          break;
        }
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
