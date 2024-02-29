// 2733. Neither Minimum nor Maximum
// https://leetcode.com/problems/neither-minimum-nor-maximum/description

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var findNonMinOrMax = function(nums) {
    let max = nums[0], min = nums[0];
    for(let num of nums){
        if(max < num) max = num;
        if(min > num) min = num;
    }
    for(let num of nums)
        if(max !== num && min !== num) return num;
    return -1;
};

// Solution: 2;
// Time-Complexity: O(n(log(n)));
// Space-Complexity: O(1);
var findNonMinOrMax = function(nums) {
    nums = nums.sort((a,b) => a-b);
    if(nums.length > 2) return nums[1];
    else return -1
};
