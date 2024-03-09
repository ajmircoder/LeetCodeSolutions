// 2540. Minimum Common Value
// https://leetcode.com/problems/minimum-common-value/description/?envType=daily-question&envId=2024-03-09

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var getCommon = function(nums1, nums2) {
    let set = new Set();
    for(let i = 0; i < nums1.length; i++)
        set.add(nums1[i]);

    for(let i = 0; i < nums2.length; i++){
        if(set.has(nums2[i])) return nums2[i];
    }
    return -1
    };
