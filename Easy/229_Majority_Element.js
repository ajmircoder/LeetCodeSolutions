// 229. Majority Element
// https://leetcode.com/problems/majority-element/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var majorityElement = function(nums) {
    let map = new Map(), n = Math.ceil(nums.length / 2);
    for(let num of nums) map.has(num) ? map.set(num, map.get(num)+1) : map.set(num, 1);
    for(let [key, value] of map) if( value >= n) return key;
};
