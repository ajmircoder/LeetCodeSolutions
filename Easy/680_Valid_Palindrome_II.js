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
        }else return isPalindrome(s, l+1, r) || isPalindrome(s, l, r-1);
    }
    return true;
};
function isPalindrome(s, l, r){
    while(l < r){
        if(s[l] == s[r]){
            l++
            r--
        }else return false;
    }
    return true;
}

// Solution: 2;
// Time-complexity: O(n^2)
// Space-complexity: O(1);
var validPalindrome = function(s) {
    for(let i = 0; i < s.length; i++){
        let palindrome = (s.substring(0, i) + s.substring(i + 1, s.length));
        let l = 0, r = palindrome.length - 1, flag = true;
        while(l < r){
            if(palindrome[l] !== palindrome[r]){
                flag = false;
                break;
            }
            l++
            r--
        }
        if(flag) return flag;
    }
    return false;
};
