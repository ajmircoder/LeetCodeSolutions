// 961. N-Repeated Element in Size 2N Array;
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/description/

// Solution: 1;
// Time-complexity: O(n);
// Time-complexity: O(n);
var repeatedNTimes = function(nums) {
    let map = new Map();
    for(let num of nums){
        map.has(num) ? map.set(num, map.get(num)+1) : map.set(num, 1);
        if(map.get(num) == nums.length/2){
            return num
        }
    }
};
