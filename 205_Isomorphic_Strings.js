// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/description/

// Solution: 1;
// Time-Space-complexity: O(n)
var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let map = new Map(), map2 = new Map();
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
           if(map.get(s[i]) !== t[i]){
               return false;
           }
        }else{
            map.set(s[i], t[i])
        }
        if(map2.has(t[i])){
           if(map2.get(t[i]) !== s[i]){
               return false;
           }
        }else{
            map2.set(t[i], s[i])
        }
        
    }
    return true;
};
