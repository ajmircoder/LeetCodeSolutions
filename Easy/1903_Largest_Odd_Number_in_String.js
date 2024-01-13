// 1903. Largest Odd Number in String
// https://leetcode.com/problems/largest-odd-number-in-string/description

// Soution - 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var largestOddNumber = function(num) {
    let right = num.length - 1;
    while(right >= 0){
        if(Number(num[right]) % 2 !== 0){
            return num.substring(0, right + 1)
        }
        right--
    }
    return ''
};
