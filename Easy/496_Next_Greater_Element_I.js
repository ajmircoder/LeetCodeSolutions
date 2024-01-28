// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/description

// Solution: 1;
// Time-complexity: O(n^2);
// Space-complexity: O(1);
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    for(let i = 0; i < nums2.length; i++){
        map.set(nums2[i],i);
    }
    let i = 0, ans = [];
    while(i < nums1.length){
        for(let j = map.get(nums1[i]) + 1; j < nums2.length; j++){
            if(nums1[i] < nums2[j]){
                ans.push(nums2[j]);
                break;
            }
        }
        if(i+1 !== ans.length){
            ans.push(-1);
        }
        i++
    }
    return ans
};
