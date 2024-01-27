// 521. Longest Uncommon Subsequence I
// https://leetcode.com/problems/longest-uncommon-subsequence-i/description/

// Solution: 1;
// Time-complexity: O(Min(m, n)) ----> m = a.length, n = b.length;
// Space-complexity: O(1);
var findLUSlength = function(a, b) {
    if(a == b){
        return -1
    }
    if(a !== b){
        return Math.max(a.length, b.length);
    }
    for(let i = 0; i < Math.max(a.length, b.length); i++){
        if(a[i] !== b[i]){
            a = a.substring(i, a.length)
            b = b.substring(i, b.length);
            return Math.max(a.length, b.length);
        }
    }

};
