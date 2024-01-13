//1. Two Sum
// https://leetcode.com/problems/two-sum/description/


// solution- 1
// Time-complexity- O(n);
// space-complexity- O(n);
var twoSum = function(nums, target) {
    const number = new Map();
    for(let i = 0; i < nums.length; i++){
        if(number.has(target - nums[i])){
          return [i , number.get(target - nums[i])]
        }
        number.set(nums[i], i);
    };
};

// solution- 2
// Time-complexity- O(n^2);
// space-complexity- O(1);
const sum = (arr, sum) => {
     for (let i = 0; i < arr.length; i++) {
         for(let j = i + 1; j < arr.length; j++){
             if(arr[i] + arr[j] == sum){
                 return [i, j]
             }
         }
     }
 }

// solution- 3
// Time-complexity- O(n);
// space-complexity- O(n);
var twoSum = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            return [i, obj[nums[i]]];
        }else{
            obj[target - nums[i]] = i;
        }
    }
};
