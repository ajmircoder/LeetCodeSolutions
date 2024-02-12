// 229. Majority Element II
// https://leetcode.com/problems/majority-element-ii/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var majorityElement = function(nums) {
    let map = new Map();
    for(let num of nums) map.has(num) ? map.set(num, map.get(num)+1) : map.set(num, 1);
    let ans = [], n = Math.floor(nums.length/3);
    for(let [key, value] of map) if(value > n) ans.push(key);
    return ans;
};
