// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/

// Solution: 1;
// Time-complexity: O(M(n))
// Space-complexity: O(1);
var isSubsequence = function(s, t) {
    if(s.length > t.length){
        return false;
    }
    let index = 0;
    let flag = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = index; j < t.length; j++){
            if(t[j] == s[i]){
                index = j + 1;
                flag++;
                break;
            }
        }
    }
    return flag == s.length ? true : false;
};
