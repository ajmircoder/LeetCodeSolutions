// 2729. Check if The Number is Fascinating
// https://leetcode.com/problems/check-if-the-number-is-fascinating/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var isFascinating = function(n) {
    let str = '' +n + 2*n + 3*n;
    let set = new Set();
    for(let s of str){
        if(s == "0") return false;
        if(set.has(s)) return false;
        else set.add(s);
    }
    return true;
};
