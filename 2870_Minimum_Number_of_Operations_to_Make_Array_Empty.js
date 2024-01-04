// 2870. Minimum Number of Operations to Make Array Empty
// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/description

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var minOperations = function(nums) {
    let obj = {}, emptyCount = 0, arr = []
    for(let i = 0; i < nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]] = obj[nums[i]] + 1;
        }else{
            arr.push(nums[i]);
            obj[nums[i]] = 1;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]] - 3 >= 3 || obj[arr[i]] - 3 == 0){
            emptyCount++;
            obj[arr[i]] = obj[arr[i]] - 3;
            i--;
            continue;
        }else if(obj[arr[i]] - 2 >= 0){
            emptyCount++;
            obj[arr[i]] = obj[arr[i]] - 2;
            i--;
            continue;
        }else if(obj[arr[i]] == 1){
            return -1
        }
    }
    return emptyCount
};
