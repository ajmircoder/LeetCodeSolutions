// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Solution: 1;
// Time-Complexity: O(n);
//Space-Complexity: O(1);
var lengthOfLongestSubstring = function(s){
    if(!s.length){
        return 0;
    };
    let i = 0, j = 0, map = new Map(), length = 1;
    while(j < s.length){
        if(!map.has(s[j]) || map.get(s[j]) < i){
            map.set(s[j], j);
            if(j - i + 1 > length){
                length = j - i + 1;
            }
        }else{
            i = map.get(s[j]) + 1;
            map.set(s[j], j);
        };
        j++;
    };
    return length;
};
