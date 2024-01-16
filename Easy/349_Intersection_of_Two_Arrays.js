// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/description/

// Solution: 1;
// Time-Complexity: o(n);
// Space-Complexity: o(n);
var intersection = function(nums1, nums2) {
    let set = new Set();
    for(let i = 0; i < nums2.length; i++){
        if(!set.has(nums2[i])){
            set.add(nums2[i]);
        }
    }
    let set2 = new Set(), arr = [];
    for(let i = 0; i < nums1.length; i++){
        if(set.has(nums1[i])){
            if(!set2.has(nums1[i])){
                set2.add(nums1[i]);
                arr.push(nums1[i]);
            }
        }
    }
    return arr;
};
