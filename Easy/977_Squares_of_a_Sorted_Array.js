// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/description/?envType=daily-question&envId=2024-03-02

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var sortedSquares = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] =  Math.abs(nums[i]*nums[i]);
    }
   return nums.sort((a,b)=>a-b)
};
