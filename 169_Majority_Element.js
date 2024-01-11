// 169. Majority Element
// https://leetcode.com/problems/majority-element/description/

// Solution: 1;
// Time-Space-Complexity: O(n)n;
var majorityElement = function(nums) {
    if(nums.length == 1){
        return nums[0];
    }
   let map = new Map();
   let half = Math.ceil(nums.length / 2);
   for(let i = 0; i < nums.length; i++){
       if(map.has(nums[i])){
           map.set(nums[i], (map.get(nums[i]) + 1));
           if(map.get(nums[i]) >= half){
           return nums[i];
       }
       }else{
           map.set(nums[i], 1);
       }
   }
};
