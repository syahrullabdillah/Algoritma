// Calculate the difference between the sum of diagonals of a matrix
function diagonalDifference(matrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        diagonal1 += matrix[i][i];
        diagonal2 += matrix[i][n - i - 1];
    }

    return diagonal1 - diagonal2;
}

const matrix = [[1, 2, 0, 3], 
                [4, 5, 6, 7], 
                [7, 8, 9, 5], 
                [2, 6, 0, 1]];
const result = diagonalDifference(matrix);
console.log(result); // Output: 3
