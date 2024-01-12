// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/description

// Solution: 1;
// Time-Space-Complexity: o(n);
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length){
        return false;
    };
    let map = new Map();
    for(let i = 0; i < magazine.length; i++){
        if(map.has(magazine[i])){
            map.set(magazine[i], map.get(magazine[i]) + 1);
        }else{
            map.set(magazine[i], 1);
        }
    }
    for(let i = 0; i < ransomNote.length; i++){
        if(map.has(ransomNote[i])){
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
            if(map.get(ransomNote[i]) < 0){
                return false
            }
        }else{
            return false
        }
    }
    return true
};

// Time-Space-Complexity: o(n);
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length){
        return false;
    };
    let map = new Map();
    for(let i = 0; i < magazine.length; i++){
        if(map.has(magazine[i])){
            map.set(magazine[i], map.get(magazine[i]) + 1);
        }else{
            map.set(magazine[i], 1);
        }
        if(ransomNote[i]){
            if(map.has(ransomNote[i])){
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
            }else{
            map.set(ransomNote[i], -1);
            }
        }
        
    }
    for(let [key, value] of map ){
        if(value < 0){
            return false;
        }
    }
    return true;
};
