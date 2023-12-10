//268. Missing Number
// https://leetcode.com/problems/missing-number/description/

//time-complexity- O(2n) ---> O(n);
//space-complexity- )(n)
var missingNumber = function(nums) {
    let set = new Set();
    let value;
    for(let i = 0; i < nums.length; i++){
        set.add(nums[i]);
    }
    for(let i = 0; i < nums.length; i++){
        value = i
        if(!set.has(i)){
            return i
        }
    }
    return value + 1
};
//time-complexity- O(n + log(n));
//space-complexity- )(1)
var missingNumber = function(nums) {
    nums.sort(function(a, b){return a - b});
    if(nums[0] !== 0){
        return 0;
    }
    for(let i = 0 ; i < nums.length - 1; i++){
        if(nums[i] + 1 !== nums[i + 1]){
            return nums[i] + 1;
        }
    }
    return nums[nums.length - 1] + 1
};
