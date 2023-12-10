// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/description/

// solution - 1
var moveZeroes = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            count++
        }else{
            nums[i - count] = nums[i]
        }
    }
    while(count > 0){
        nums[nums.length - count] = 0;
        count--;
    }
    return nums
};

// solution - 2

var moveZeroes = function(nums) {
    let arr2 = []
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            count++
        }else{
            arr2.push(nums[i])
        }
    }

    for(let i = 0; i < arr2.length; i++){
        nums[i] = arr2[i];
    }
    let i = nums.length - 1;
    while(count > 0){
        nums[i] = 0;
        i--;
        count--;
    }
    
    return nums
};
