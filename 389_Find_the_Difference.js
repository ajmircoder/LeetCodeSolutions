//389. Find the Difference
// https://leetcode.com/problems/find-the-difference/description

// Solution - 1;
 var findTheDifference = function(s, t) {
    const count = [
                    0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0
                    ];
    for(let i = 0; i < t.length; i++){
        if(i < s.length){
            count[s[i].charCodeAt(0) - 97] += 1
        }
        count[t[i].charCodeAt(0) - 97] -= 1
    }
    for(let i = 0; i < count.length; i++){
        if(count[i] !== 0){
            return String.fromCharCode(i + 97);
        }
    }
};

// Solution - 2;
var findTheDifference = function(s, t) {
    let map = new Map();
    for(let i = 0; i < t.length; i++){
        if(i < s.length){
            if(map.has(s[i])){
            map.set(s[i], map.get(s[i]) + 1);
            }else{
            map.set(s[i], 1);
        }}
        if(map.has(t[i])){
            map.set(t[i], map.get(t[i]) - 1)
        }else{
            map.set(t[i], -1);
        }
    }
    for(let i = 0; i < t.length; i++){
        if(map.get(t[i]) !== 0){
            return t[i];
        }
    }
};
