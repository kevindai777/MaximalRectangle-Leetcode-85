//Java Solution

class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0) {
            return 0;
        }
        
        int[] width = new int[matrix.length];
        int max = 0;
        
        for (int i = 0; i < matrix[0].length; i++) {
            for (int j = 0; j < matrix.length; j++) {
                if (matrix[j][i] == '1') {
                    width[j]++;
                } else {
                    width[j] = 0;
                }
            }
            
            for (int k = 0; k < matrix.length; k++) {
                int height1 = k - 1;
                while (height1 >= 0 && width[height1] >= width[k]) {
                    height1--;
                }
                
                int height2 = k + 1;
                while (height2 < matrix.length && width[height2] >= width[k]) {
                    height2++;
                }
                
                max = Math.max(max, width[k] * (height2 - height1 - 1));
            }
        }
        
        return max;
    }
}