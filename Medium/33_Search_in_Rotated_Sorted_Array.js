// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// Solution: 1;
// Time-Complexity: O(log(n));
// Space-Complexity: O(1);
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l <= r){
        let m = Math.floor((r + l) / 2);
        if(nums[m] == target){
            return m;
        }
        if(nums[m] <= nums[r]){
            // right part of the array sorted;
            if(target > nums[m] && target <= nums[r]){
                l = m + 1
            }else{
                r = m - 1;
            }
        }else{
            // left part of the array sorted;
            if(nums[l] <= target && target < nums[m]){
                r = m - 1
            }else{
                l = m + 1;
            }
        }
    }
    return -1;
};