// 2716. Minimize String Length
// https://leetcode.com/problems/minimize-string-length/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var minimizedStringLength = function(s) {
    let set = new Set();
    for(let i of s) set.add(i);
    return set.size;
};
