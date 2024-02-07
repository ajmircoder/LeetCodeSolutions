// 451. Sort Characters By Frequency
// https://leetcode.com/problems/sort-characters-by-frequency/description/

// Solution: 1;
// Time-complexity: O(n)
// Space-complexity: O(n);
var frequencySort = function(s) {
    let map = new Map();
    for(let str of s )
        map.has(str) ? map.set(str, map.get(str)+1) : map.set(str, 1);
    
    map = [...map.entries()].sort((a, b) => b[1] - a[1]);
    let str = '';
    for(let m of map){
        for(let i = 0; i < m[1]; i++){
            str+=m[0];
        }
    }
    return str
};
