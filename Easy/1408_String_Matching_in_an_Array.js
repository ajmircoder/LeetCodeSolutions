// 1408. String Matching in an Array
// https://leetcode.com/problems/string-matching-in-an-array/description/

//// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var stringMatching = function(words) {
    words.sort((a,b)=>a.length-b.length);
    let ans = [];
    for(let i = 0; i < words.length; i++){
        for(let j = i+1; j < words.length; j++){
            if(words[j].includes(words[i])){
                ans.push(words[i]);
                break;
            }
        }
    }
    return ans
};
