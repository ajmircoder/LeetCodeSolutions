// 2748. Number of Beautiful Pairs
// https://leetcode.com/problems/number-of-beautiful-pairs/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n^2);
var countBeautifulPairs = function(nums) {
    let ans = new Set();
    for(let i = 0; i < nums.length; i++){
        let f = Number(nums[i].toString()[0]);
        for(let j = i+1; j < nums.length; j++){
            let l = nums[j]%10;
            if(l == f && f > 1) continue;
            if((f % 2 !== 0 || l % 2 !== 0) && (f % 3 !== 0 || l % 3 !== 0)){
                ans.add([nums[i], nums[j]]);
            }
        }
    }
    return ans.size;
};
