// Palindrome Number
// https://leetcode.com/problems/palindrome-number/description/

// Solution: 1;
var isPalindrome = function(x) {
    if(x.toString() == x.toString().split('').reverse().join('')) return true;
    else return false;
};
