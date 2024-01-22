// 1624. Largest Substring Between Two Equal Characters
// https://leetcode.com/problems/largest-substring-between-two-equal-characters/description

// Solution: 1;
// Time-Space-complexity: O(n) ---> O(n);
var maxLengthBetweenEqualCharacters = function(s) {
    let map = new Map(), subStr = '', isSub = false;
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            let temStr = s.substring(map.get(s[i])+1, i)
            if(temStr.length > subStr.length){
                subStr = temStr;
            }
            isSub = true;
        }else{
            map.set(s[i], i);
        }
    }
    return isSub ? subStr.length : -1
};
