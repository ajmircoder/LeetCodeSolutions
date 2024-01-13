// 1528. Shuffle String
// https://leetcode.com/problems/shuffle-string/description/

// Solution - 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var restoreString = function(s, indices) {
    let arr = s.split('');
    for(let i = 0; i < s.length; i++){
        arr[indices[i]] = s[i]; 
    }
    return arr.join('');
};
