// 189. Rotate Array
// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var rotate = function(nums, k) {
    let rotate = (k % nums.length);
    let ans = [];
    while(rotate){
        ans.push(nums[nums.length-rotate]);
        rotate--
    }
    let i = 0;
    while(ans.length !== nums.length){
        ans.push(nums[i]);
        i++;
    }
    let j = 0;
    while(j < ans.length){
        nums[j] = ans[j];
        j++
    }
};
