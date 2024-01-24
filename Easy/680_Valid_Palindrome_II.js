// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/description

// Solution: 1;
// Time-complexity: O(n)
// Space-complexity: O(1);
var validPalindrome = function(s) {
    let l = 0, r = s.length - 1; 
    while(l < r){
        if(s[l] == s[r]){
            l++
            r--
        }else{
            return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1);
        }
    }
    return true;
};

function isPalindrome(s, l, r){
    while(l < r){
        if(s[l] == s[r]){
            l++
            r--
        }else{
            return false;
        }
    }
    return true;
}
