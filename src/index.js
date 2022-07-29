module.exports = function towelSort (matrix) {

    if (matrix === undefined) {
        return [];
    }

    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            result[i] = matrix[i];
        } else if (i % 2 !== 0) {
            result[i] = matrix[i].reverse();
        }
    }

    let singleArr = [];
    for (let i = 0; i < result.length; i++) {
        singleArr = singleArr.concat(result[i]);
    }
    return singleArr;
}
