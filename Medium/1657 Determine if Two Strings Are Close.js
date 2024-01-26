// 1657. Determine if Two Strings Are Close
// https://leetcode.com/problems/determine-if-two-strings-are-close/description

// Solution: 1;
// Time-complexity: O(n(log(n));
// Space-complexity: O(1);
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;
    let map1 = new Map(), map2 = new Map();
    for(let i = 0; i < word1.length; i++){
        if(map1.has(word1[i])) map1.set(word1[i], map1.get(word1[i]) + 1);
        else map1.set(word1[i], 1);

        if(map2.has(word2[i])) map2.set(word2[i], map2.get(word2[i]) + 1);
        else map2.set(word2[i], 1);
    }
    if(map1.size !== map2.size) return false;
    let arr = [], arr2 = [];
    for(let [key, value] of map1){
        if(!map2.has(key)) return false;
        arr.push(value);
    }
    for(let [key, value] of map2){
        if(!map1.has(key)) return false;
        arr2.push(value);
    }
    arr.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr2[i]) return false;
    }
    return true;
};
