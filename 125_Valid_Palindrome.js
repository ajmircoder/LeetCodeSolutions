// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/

// time-complexity- O(n);
// space-complexity- O(1);
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1
    while(left <= right){
        let char = s[left].toLowerCase();
        let char2 = s[right].toLowerCase();
        if(!char.match(/^[a-zA-Z0-9]/)){
            left++;
            continue;
        }
        if(!char2.match(/^[a-zA-Z0-9]/)){
            right--;
            continue;
        }
        if(char !== char2){
            return false
        }
        left++;
        right--;
    }
    return true;
};

// time-complexity- O(2n) --> O(n);
// space-complexity- O(2n) --> O(n);
var isPalindrome = function(s) {
    let newS = '';
    for(let i = 0 ; i < s.length; i++){
        let char = s[i].toLowerCase();
        if(s[i].match(/[A-Za-z0-9]/)){
            newS += char;
        }
    }
    let left = 0;
    let right = newS.length - 1
    while(left <= right){
        if(newS[left] !== newS[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
};

// time-complexity- O(n);
// space-complexity- O(2n) --> O(n);
var isPalindrome = function(s) {
    let b = '';
    let a = '';
    for(let i = s.length - 1; i >= 0; i--){
        let char = s[i].toLowerCase();
      // if(s[i].match(/[A-Za-z0-9]/));
        if((char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || 
            char.charCodeAt(0) >= 48 &&  char.charCodeAt(0) <= 57){
        b+=(char);
        a = char + a
        } 
    }
    return b == a
};
