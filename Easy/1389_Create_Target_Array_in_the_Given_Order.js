// 1389. Create Target Array in the Given Order
https://leetcode.com/problems/create-target-array-in-the-given-order/submissions/1102560426/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arr = [];
    if(index.length < 2){
        arr[0] = nums[0]
        return arr
    }
    for(let i = 0; i < nums.length; i++){
        if(index[i] < i){
           arr.splice(index[i], 0, nums[i]);
           continue
        }
        arr[index[i]] = nums[i];
    }
    return arr
};
