// 414. Third Maximum Number
// https://leetcode.com/problems/third-maximum-number/description/

// Solution: 1;
// Time-Complexity: O(n(log(n)));
// Space-Complexity: O(1);
var thirdMax = function(nums) {
    nums.sort(function(a, b){return b - a});
    if(nums.length > 3 && nums[0] !== nums[1] && nums[1] !== nums[2]){
        return nums[2]
    }
    let count = 0, tMax = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(tMax > nums[i] && count < 2){
            tMax = nums[i];
            count++
            if(count == 2){
                break;
            }
        }
    }
    if(count == 1){
        return nums[0] 
    }
     return tMax
};
