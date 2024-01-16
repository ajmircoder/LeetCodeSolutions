// 349. Intersection of Two Arrays || 
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// Solution: 1;
// Time-Complexity: o(n);
// Space-Complexity: o(n);
var intersect = function(nums1, nums2) {
    let map = new Map();
    for(let i = 0; i < nums2.length; i++){
        if(map.has(nums2[i])){
            map.set(nums2[i], map.get(nums2[i]) + 1);
        }else{
            map.set(nums2[i], 1);
        }
    }
    let arr = [];
    for(let i = 0; i < nums1.length; i++){
        if(map.has(nums1[i]) && map.get(nums1[i]) > 0){
            map.set(nums1[i], map.get(nums1[i]) - 1);
            arr.push(nums1[i])
        }
    }
    return arr;
};
