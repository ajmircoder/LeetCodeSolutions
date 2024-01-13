// 26_Remove_Duplicates_from_Sorted_Array
//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// solution- 1
// Time-Complexity = O(n);
// Space-Complexity = O(1);
var removeDuplicates = function(nums) {
    let k = 1;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] !== nums[i + 1]){
            nums[k] = nums[i + 1]
            k++
        }
    }
    return k
};

// solution- 2
// Time-Complexity = O(n);
// Space-Complexity = O(n);
var removeDuplicates = function(nums) {
    let obj = {};
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(!obj.hasOwnProperty(nums[i])){
            obj[nums[i]] = 1;
            nums[k] = nums[i];
            k++
        }
    }
    return k
};

// solution- 3
// Time-Complexity = O(n);
// Space-Complexity = O(n);
var removeDuplicates = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++){
        if(!obj.hasOwnProperty(nums[i])){
            obj[nums[i]] = 1;
        }else{
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

// solution- 4
// Time-Complexity = O(n);
// Space-Complexity = O(2n) ---> O(n);
var removeDuplicates = function(nums) {
    let arr = nums;
     nums = [];
     let nums2 = [];
    for(let i = 0; i < arr.length; i++){
        if(!nums.includes(arr[i])){
            nums.push(arr[i])
        }else{
            nums2.push(arr[i]);
        }
    }
    nums.push(...nums2);
    return nums
};
