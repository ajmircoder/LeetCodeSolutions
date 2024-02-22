// 628. Maximum Product of Three Numbers
// https://leetcode.com/problems/maximum-product-of-three-numbers/description/


// Solution: 1;
// Time-Complexity: o(log(n));
// Space-Complexity: o(1);
var maximumProduct = function(nums) {
    nums = nums.sort((a,b) => b-a)
    return Math.max(nums[0]*nums[1]*nums[2], nums[nums.length-1]*nums[nums.length-2]*nums[0])
};
