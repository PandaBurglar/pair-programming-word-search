const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalMatrix = transpose(letters);
         
    const verticalJoin = verticalMatrix.map(vls => vls.join(''))
    for (vl of verticalJoin) {
        if (vl.includes(word)) return true
    }
 return false;
}

// IN ORDER TO READ VERTICALLY< TRANPOSE THE MATRIX!!
const transpose = (matrix) => {
    const newMatrix = []; // create array 
    for (const index in matrix[0]) { // for loop for each i in the matrix 
        const columns = [];
        for (const arr of matrix) { // declare another array for columns (1-end)
            columns.push([arr[index]]);
        }
        newMatrix.push(columns);;
        
    } return newMatrix;
};

module.exports = wordSearch;