//896. Monotonic Array
//https://leetcode.com/problems/monotonic-array/description

// Solution: 1;
// Time-complexity: O(2n) ---> O(n);
// Space-complexity: O(1);
var isMonotonic = function(nums) {
    let increasing;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == nums[i + 1]){
            continue;
        }else if(nums[i] > nums[i + 1]){
            increasing = false;
            break;
        }else{
            increasing = true;
            break;
        }
    }
    for(let i = 0; i < nums.length - 1; i++){
        if(increasing){
            if( nums[i] <= nums[i + 1]){
                continue;
            }else{
                return false;
            }
        }else{
            if( nums[i] >= nums[i + 1]){
                continue;
            }else{
                return false;
            }
        }
    }
    return true;
};
