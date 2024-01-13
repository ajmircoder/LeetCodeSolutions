//219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/description/

// time-complexity- O(n);
// space-complexity- O(n);
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

// time-complexity- O(n^2);
// space-complexity- O(1);
var containsNearbyDuplicate = function(nums, k) {
    for(let i = 0 ; i < nums.length; i++){
        for(let j = i + 1 ; j < nums.length; j++){
            if(nums[j] == nums[i] && j - i <= k){
                return true;
            }
        }
    }
    return false;
};

// console.log(containsNearbyDuplicate(arr, 97))
