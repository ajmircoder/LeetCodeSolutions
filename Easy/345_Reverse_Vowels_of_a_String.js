// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var reverseVowels = function(s) {
    s = s.split('');
    let left = 0;
    let right = s.length - 1;
    let vowels = "aeiouAEIOU";  
    while(left <= right){ 
        while(left <= right && !vowels.includes(s[left])){
           left++;
        }
        while(left <= right && !vowels.includes(s[right])){
            right--;
        }
        if(left > right) break;
        let tem = s[left];
        s[left] = s[right];
        s[right] = tem;
        left++;
        right--;
    }
    return s.join('')
};

// Solution: 2;
// Time-complexity: O(n)
// Space-complexity: O(1);

var reverseVowels = function(s) {
    s = s.split('');
    let left = 0;
    let right = s.length - 1;
    let flag1 = false;
    let flag2 = false;
    while(left <= right){ 
        if(!flag1 && s[left] !== "E" && s[left] !== "a" && s[left] !== "e" && s[left] !== "i" && s[left] !=="o"
        && s[left] !== "u"&& s[left] !== "A" && s[left] !== "I" && s[left] !== "O" && s[left] !== "U") left++
        else{ flag1 = true;

        if(!flag2 && s[right] !== "a" && s[right] !== "e" && s[right] !== "i" && s[right] !== "o" && s[right] !=="u" &&
        s[right] !== "A" && s[right] !== "E" && s[right] !== "I" && s[right] !== "O" && s[right] !=="U") right--;
        else flag2 = true;

        if(flag1 && flag2){
            let tem = s[left];
            s[left] = s[right];
            s[right] = tem;
            left++;
            right--;
            flag1=false;
            flag2=false;
        }
    }
    return s.join('')
};
