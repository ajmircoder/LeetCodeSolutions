// 229. Majority Element II
// https://leetcode.com/problems/majority-element-ii/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var majorityElement = function(nums) {
    let num1 = null, num2 = null, count1=0, count2=0, ans = [], n = Math.floor(nums.length/3);
    for(let num of nums){
        if(num1 == num) count1++;
        else if(num2 == num) count2++;
        else if(count1 == 0) count1++, num1 = num;
        else if(count2 == 0) count2++, num2 = num;
        else count1--, count2--;
    }
    count1 = count2 = 0;
    for(let num of nums){
        if(num1 == num) count1++
        else if(num2 == num) count2++
    }
    if(count1 > n) ans.push(num1);
    if(count2 > n) ans.push(num2);
    return ans;
};

// Solution: 2;
// Time-complexity: O(n);
// Space-complexity: O(n);
var majorityElement = function(nums) {
    let map = new Map();
    for(let num of nums) map.has(num) ? map.set(num, map.get(num)+1) : map.set(num, 1);
    let ans = [], n = Math.floor(nums.length/3);
    for(let [key, value] of map) if(value > n) ans.push(key);
    return ans;
};
