// 645. Set Mismatch
// https://leetcode.com/problems/set-mismatch/description
// Solution: 1;
// Time- Space-complexity: O(n);
var findErrorNums = function(nums) {
    let set = new Set(), double;
    for(let value of nums){
        if(!set.has(value)){
            set.add(value);
        }else{
            double = value;
        }
    }
    let i = 1;
    while(i){
        if(!set.has(i)){
            return [double, i];
        }
        i++
    }
};
