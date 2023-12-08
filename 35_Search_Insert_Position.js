// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/description/


//solution 1
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    while(left <= right){
       middle = Math.floor((left + right) / 2);
       if(nums[middle] == target){
          return middle;
       }
       if(nums[middle] > target){
        right = middle - 1
       }else{
        left = middle + 1
     }
    }
    if(nums[middle] < target){
        return middle + 1
    }else{
        return middle 
    }    
};
