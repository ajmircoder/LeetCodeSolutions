// 1913. Maximum Product Difference Between Two Pairs
// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description

var maxProductDifference = function(nums) {
    let max = nums[0], pvrMax = 0;
    for(let i = 1; i < nums.length; i++){
        if(max <= nums[i]){
            pvrMax = max;
            max = nums[i];
        }else if(pvrMax < nums[i]){
            pvrMax = nums[i];
        }
    }
    let min = nums[0], pvrMin = max;
    for(let i = 1; i < nums.length; i++){
        if(min >= nums[i]){
            pvrMin = min;
            min = nums[i];
        }else if( pvrMin > nums[i] && nums[i] > min){
            pvrMin = nums[i];
        }
    }
    return (max * pvrMax) - (min * pvrMin);
};

var maxProductDifference = function(nums) {
    let max = nums[0], pvrMax = 0, min = nums[0], pvrMin = Infinity;
    for(let i = 1; i < nums.length; i++){
        if(max < nums[i]){
            pvrMax = max;
            max = nums[i];
        }else if(pvrMax < nums[i]){
            pvrMax = nums[i];
        }
        if(min > nums[i]){
            pvrMin = min;
            min = nums[i];
        }else if( pvrMin > nums[i]){
            pvrMin = nums[i];
        }
    }
    return (max * pvrMax) - (min * pvrMin);
};
