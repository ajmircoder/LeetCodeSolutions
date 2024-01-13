// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/description/

// Solution: 1;
// Time-Space-Complexity: O(n);
var longestPalindrome = function(s) {
    if(s.length == 1){
        return 1;
    }
    let map = new Map(), paliCount = 0
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }
        else{
            map.set(s[i], 1);
        }
        if(map.get(s[i]) == 2){
            paliCount += 2;
            map.set(s[i], 0);
        }
    }
    if(s.length > paliCount) return paliCount + 1;
    else return paliCount;
};
