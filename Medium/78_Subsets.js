// 78. Subsets
// https://leetcode.com/problems/subsets/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var subsets = function(nums) {
    let ans = [], index = 0; mainAns = [];
    function subset(arr, index, ans, mainAns){
        if(index == arr.length){
            mainAns.push([...ans]);
            return;
        };
        ans.push(arr[index]);
        subset(arr, index+1, ans, mainAns);
        ans.pop();
        subset(arr, index+1, ans, mainAns);
    } 
    subset(nums,index, ans, mainAns);
    return mainAns;
};
