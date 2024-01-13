// 1464. Maximum Product of Two Elements in an Array
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

var maxProduct = function(nums) {
    let max = nums[0], pvrMax = 0;
    for(let i = 1 ; i < nums.length; i++){
        if(nums[i] > max) {
            pvrMax = max;
            max = nums[i];
        } else if(nums[i] > pvrMax) {        
             pvrMax = nums[i];
        }
    }
    return (max - 1) * (pvrMax - 1);

};

var maxProduct = function(nums) {
    nums.sort(function(a, b){return a - b});
    console.log(nums)
    return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1)
};
