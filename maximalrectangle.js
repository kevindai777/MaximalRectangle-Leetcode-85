//Objective is to find the largest possible rectangle in a 2D matrix.

let matrix = 
[["1","0","1","0","0"],
 ["1","0","1","1","1"],
 ["1","1","1","1","1"],
 ["1","0","0","1","0"]]


//O(n * m) solution where n and m are the length wnd width of the matrix respectively
//We use a dynamic programming approach where we continuously update our histogram and find the maximum height of the histogram

if (matrix.length == 0) {
    return 0
}

let width = new Array(matrix.length).fill(0)
let max = 0
    
for (let i = 0; i < matrix[0].length; i++) {
    
    //Update the histogram - consecutive 1's means it's from a previous height
    //A 0 means that's the end of that particular height and you have to reset
    for (let j = 0; j < matrix.length; j++) {
        //Chart the consecutive 1's in each row
        //[0,3,5,0] for the last column
        if (matrix[j][i] == '1') {
            width[j]++    
        } else {
            width[j] = 0
        }
    }
    
    //Find the max height of the rectangle
    for (let i = 0; i < matrix.length; i++) {
        
        //For it to be a valid height, it has to be within the bounds of the other rectangles in the particular row
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
