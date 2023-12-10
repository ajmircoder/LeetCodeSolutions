//219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k){
            return true;    
        }
        map.set(nums[i], i);
    }
    return false;
};


var containsNearbyDuplicate = function(nums, k) {
    let obj = {}
    for(let i = 0 ; i < nums.length; i++){
        for(let j = i + 1 ; j < nums.length; j++){
            if(nums[j] == nums[i] && j - i <= k){
                return true;
            }
        }
    }
    return false;
};

console.log(containsNearbyDuplicate(arr, 97))
