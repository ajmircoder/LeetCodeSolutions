// 2966. Divide Array Into Arrays With Max Difference
// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/?envType=daily-question&envId=2024-02-01

// Solution: 1;
// Time-complexity: O(n(logN));
// Space-complexity: O(n);
var divideArray = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let i = 0, ans = [];
    while(i < nums.length-2){
        if((nums[i+1] - nums[i] > k) || 
           (nums[i + 2] - nums[i] > k) || 
           (nums[i + 2] - nums[i+1] > k)){
            return [];
        }else ans.push([nums[i], nums[i+1], nums[i+2]]);
        i+=3;
    }
    return ans
};
