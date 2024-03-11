// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/description/?envType=daily-question&envId=2024-03-11

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var customSortString = function(order, s) {
    let map = new Map();
    for(let i = 0; i < s.length; i++){
        map.has(s[i]) ? map.set(s[i], map.get(s[i])+1) : map.set(s[i], 1);
    }
    let ans = '';
    for(let or of order){
        let l = map.get(or);
        while(l){
            ans+=or;
            l--;
            map.set(or, map.get(or)-1)
        }
    }
    for(let [k, v] of map){
        while(v){
            ans+=k;
            v--
        }
    }
    return ans;
};
