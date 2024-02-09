// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var maxSubArray = function(nums) {
    let max = 0, pvrmax = 0; low = nums[0];
    for(let i = 0; i < nums.length; i++){
        if(low < nums[i]) low = nums[i];
        pvrmax+= nums[i];
        if(pvrmax > max) max = pvrmax;
        if(pvrmax < 0) pvrmax = 0;
    }
    return max == 0 ? low : max;
};

// Solution: 2;
// Time-complexity: O(n);
// Space-complexity: O(1);
var maxSubArray = function(nums) {
    let max = nums[0], pvrmax = 0;
    for(let i = 0; i < nums.length; i++){
        pvrmax = Math.max(pvrmax + nums[i], nums[i]);
        max = Math.max(max, pvrmax);
    }
    return max;
};
