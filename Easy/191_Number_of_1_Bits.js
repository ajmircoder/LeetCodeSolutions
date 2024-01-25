// 191. Number of 1 Bits
// https://leetcode.com/problems/number-of-1-bits/description/

// Solution: 1;
// Time-complexity: O(log(n)) 
// Space-complexity: O(1);
var hammingWeight = function(n) {
    let count = 0;
    while(n){
        if(n % 2 == 1){
            count++
        };
        n = Math.floor(n / 2)
    }
    return count
};
