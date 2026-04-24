/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
   const R = matrix.length;
   const C = matrix[0].length;
    matrix.reverse();

    for (let i = 0; i < R; i++) {
        for (let j = i + 1; j < C; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
};
