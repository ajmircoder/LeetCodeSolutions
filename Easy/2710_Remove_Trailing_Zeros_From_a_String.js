// 2710. Remove Trailing Zeros From a String
// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var removeTrailingZeros = function(num) {
    for(let i = num.length-1; i >= 0; i--){
        if(num[i] !== "0") return num.substring(0, i+1);
    }
};
