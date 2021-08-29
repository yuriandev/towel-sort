// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        let newArr = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                for (let j = 0; j < matrix[i].length; j++) {
                    newArr.push(matrix[i][j]);
                }
            } else {
                for (let k = 0; k < matrix[i].length; k++) {
                    newArr.push(matrix[i][matrix[i].length - 1 - k]);
                }
            }
        }
        return newArr;
    }

    return [];
};
