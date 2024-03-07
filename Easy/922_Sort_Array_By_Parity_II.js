// 922. Sort Array By Parity II
// https://leetcode.com/problems/sort-array-by-parity-ii/description

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var sortArrayByParityII = function(nums) {
    let odd = [], even = [];
    for(let num of nums) num % 2 == 0 ? even.push(num) : odd.push(num);
    let i = 0;
    let j = 0;
    while(i < odd.length){
        nums[j] = even[i];
        nums[j+1]= odd[i];
        i++;
        j+=2
    }
    return nums;
};
