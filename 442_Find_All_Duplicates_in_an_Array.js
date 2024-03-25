// 442. Find All Duplicates in an Array
// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/?envType=daily-question&envId=2024-03-25

// Solution: 1;
// Time-Complexity: o(n);
// Space-Complexity: o(1);
var findDuplicates = function(nums) {
    let ans = [];
    for(let num of nums){
        let index = Math.abs(num) - 1;
        if(nums[index] < 0) ans.push(Math.abs(num));
        nums[index] *= -1;
    }
    return ans;
};

// Solution: 2;
// Time-Complexity: o(n);
// Space-Complexity: o(n);
var findDuplicates = function(nums) {
    let set = new Set(), ans = [];
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])) ans.push(nums[i]);
        else set.add(nums[i]);
    }
    return ans;
};
