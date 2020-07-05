//Objective is to find the largest possible rectangle in a 2D matrix.

if (matrix.length == 0) {
    return 0
}

let width = new Array(matrix.length).fill(0)
let max = 0
    
for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        //Chart the consecutive 1's in each row
        //[0,3,5,0]
        if (matrix[j][i] == '1') {
            width[j]++    
        } else {
            width[j] = 0
        }
    }
    //Find the max width of the rectangle
    for (let i = 0; i < matrix.length; i++) {
        let height1 = i - 1
        while (height1 >= 0 && width[height1] >= width[i]) {
            height1--
        }
        let height2 = i + 1
        while (height2 < matrix.length && width[height2] >= width[i]) {
            height2++
        }
        max = Math.max(max, width[i] * (height2 - height1 - 1))
    }
}
return max