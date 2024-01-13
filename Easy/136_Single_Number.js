// 136. Single Number
// https://leetcode.com/problems/single-number/description/

// Solution 1
// Time-complexity: O(n + log(n));
// Space-complexity: O(n);

var singleNumber = function (nums) {
    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        } else {
                i++
            }
    }
    return nums[nums.length - 1]
};

// Solution 2
// Time-complexity: O(n);
// Space-complexity: O(2n) ---> O(n);

var singleNumber = function(nums) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
    
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]] = obj[nums[i]] + 1
        }else{
            obj[nums[i]] = 1
        }
    }
    let keys = Object.keys(obj)
    for(let i = 0; i < keys.length; i++){
        if(obj[keys[i]] == 1){
            return keys[i]
        }
    }
};
