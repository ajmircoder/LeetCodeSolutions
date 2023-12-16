// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/?envType=daily-question&envId=2023-12-16


// space-complexity - O(n);
// Time-complexity - O(n);
// solution - 1;
var isAnagram = function(s, t) {
    let map = new Map();
    let map2 = new Map();
    if(s.length !== t.length) return false;  
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1)
        }else{
            map.set(s[i], 1)
        }
        if(map2.has(t[i])){
            map2.set(t[i], map2.get(t[i]) + 1)
        }else{
            map2.set(t[i], 1)
        }
    }
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) !== map2.get(s[i])) return false;
    }
    return true;
};

// space-complexity - O(n);
// Time-complexity - O(n);
// solution - 1(better version);
var isAnagram = function(s, t) {
    let map = new Map();
    if(s.length !== t.length) return false;  
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1)
        }else{
            map.set(s[i], 1)
        };
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i]) - 1)
        }else{
            map.set(t[i], -1)
        };
    }
    for(let i = 0; i < s.length; i++){
        if(map.get(s[i]) !== 0) return false;
    }
    return true;
};
