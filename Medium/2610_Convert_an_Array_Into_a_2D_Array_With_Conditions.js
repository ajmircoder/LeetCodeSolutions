// 2610. Convert an Array Into a 2D Array With Conditions
// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/

// Solution: 1;
// Time-Space-Complexity: O(n);
var findMatrix = function(nums) {
    let map = new Map(), mainArr = [];
    let max = 1;
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
            if(map.get(nums[i]) > max){
                max = map.get(nums[i]);
            }
        }else{
            map.set(nums[i], 1);
        }
    }
    while(max){
        let arr = [];
        for(let [key , value] of map){
            if(value > 0){
                arr.push(key);
                map.set(key, value - 1);
            }
        }
        mainArr.push(arr);
        max--
    }
    return mainArr
};