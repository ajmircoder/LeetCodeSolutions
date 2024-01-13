//561. Array Partition
//https://leetcode.com/problems/array-partition/description/

// solution - 1;
var arrayPairSum = function(nums) {
    nums.sort(function(a, b){return a - b});
    let sum = 0;
    for(let i = 0; i < nums.length - 1; i++){
        sum += nums[i];
        i++
    }
    return sum
}

// solution - 2;
var arrayPairSum = function(nums) {
    nums.sort(function(a, b){return a - b});
    let sum = 0;
    let i = 0;
    while( i < nums.length){
        sum += nums[i];
        i+=2
    }
    return sum
};
