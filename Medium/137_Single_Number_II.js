// 137. Single Number II
// https://leetcode.com/problems/single-number-ii/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var singleNumber = function(nums) {
    let map = new Map(), l = 0, r = nums.length - 1;
    while(l <= r){
        if(map.has(nums[l])){
            map.set(nums[l], map.get(nums[l]) + 1);
            if(l == r){
                break;
            }
        }else{
            map.set(nums[l], 1);
            if(l == r){
                break;
            }
        }
        if(map.has(nums[r])){
            map.set(nums[r], map.get(nums[l]) + 1);
        }else{
            map.set(nums[r], 1);
        }
        l++;
        r--;
    }
    for(let [key, value] of map){
       if(value == 1){
            return key;
       }
    }
};
