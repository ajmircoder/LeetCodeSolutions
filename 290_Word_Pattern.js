// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/description/

// Solution: 1;
// Time-Space-complexity: O(n);
var wordPattern = function(pattern, s) {
    s = s.split(' ');
    if(pattern.length !== s.length){
        return false;
    }
    let map = new Map(), map2 = new Map();
    for(let i = 0; i < pattern.length; i++){
        if(map.has(pattern[i])){
            if(map.get(pattern[i]) !== s[i]){
                return false;
            }
        }else{
            map.set(pattern[i], s[i]);
        }
        if(map2.has(s[i])){
            if(map2.get(s[i]) !== pattern[i]){
                return false;
            }
        }else{
            map2.set(s[i], pattern[i]);
        }
    }
    return true;
};
