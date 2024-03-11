// 80. Remove Duplicates from Sorted Array II
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var removeDuplicates = function(nums) {
    let map = new Map();
    for(let num of nums)
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1)
    
    let i = 0;
    for(let [k, v] of map){
       if(v > 1) {
           nums[i] = k;
           nums[i+1] = k;
           i+=2
       }else{
           nums[i] = k
            i++;
       }
    }
    return i
};
