// 1935. Maximum Number of Words You Can Type
// https://leetcode.com/problems/maximum-number-of-words-you-can-type/description/

// Solution: 1;
// time-complexity: o(n2);
// space-complexity: O(1);
var canBeTypedWords = function(text, brokenLetters) {
    text = text.split(' '),brokenLetters = brokenLetters.split(''), count = 0;
    for(let i = 0; i < text.length; i++){
        let flag = true;
        for(let s of text[i]){
            if(brokenLetters.includes(s)){
                flag = false;
                break;
            }
        }
        if(flag){
            count++;
        }
    }
    return count
};
