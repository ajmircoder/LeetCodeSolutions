// 1160. Find Words That Can Be Formed by Characters
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description

// Solution: 1;
// Time-Complexity: O(n^2);
// Space-Complexity: O(n);
var countCharacters = function(words, chars) {
    let map = new Map(), goodWordCount = 0;
     for(let i = 0; i < chars.length; i++){
         if(map.has(chars[i])){
             map.set(chars[i], map.get(chars[i]) + 1)
         }else{
             map.set(chars[i], 1);
         }
     }
     for(let i = 0; i < words.length; i++){
         let isGood = true;
         let map2 = new Map();
         for(let j = 0; j < words[i].length; j++){
             if(map.has(words[i][j])){
                 if(map2.has(words[i][j])){
                    map2.set(words[i][j], map2.get(words[i][j]) - 1);
                 }else{
                    map2.set(words[i][j], map.get(words[i][j]) - 1);
                 }
             }else{
                 isGood = false;
                 break;
             }
             if(map2.get(words[i][j]) == -1){
                 isGood = false;
                 break;
             }
         }
         isGood ? goodWordCount += words[i].length : ''
     }
    return goodWordCount
};
