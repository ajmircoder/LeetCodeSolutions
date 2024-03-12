// 55. Jump Game
// https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var canJump = function(nums) {
    let x = 1;
    if(nums.length == 1) return true;
    for(let i = nums.length-2; i >= 0; i--){
        if(nums[i] >= x){
            nums[i] = true;
            x = 1;
        }else{
            nums[i] = false;
            x++;
        }
    }
    return nums[0];
};
