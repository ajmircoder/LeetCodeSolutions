// 1347. Minimum Number of Steps to Make Two Strings Anagram
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description

// Solution: 1;
// Time-Complexity: O(n);
// Space-Coplexity: O(n);
var minSteps = function(s, t) {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
        }else{
            map.set(s[i], 1);
        };
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i]) - 1);
        }else{
            map.set(t[i], -1);
        };
    }
    let steps = 0;
    for(let [key , value] of map){
        if(value > 0){
            steps += value;
        }
    }
    return steps;
};
