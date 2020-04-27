/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    let rows = matrix.length, colums = matrix[0].length;
    let row = 0,colum = colums - 1;
    while (row < rows && colum >= 0) {
        let num = matrix[row][colum];
        if (num === target) {
            return true;
        } else {
            if (num > target) {
                colum--;
            } else {
                row++;
            }
        }
    }
    return false;
};

searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
],5)