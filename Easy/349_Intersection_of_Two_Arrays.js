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

// Solution: 2;
// Time-Complexity: o(Log(n));
// Space-Complexity: o(1);
var intersection = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    let i = 0, j = 0, ans = [];
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] == nums2[j]){
            if(!ans.includes(nums1[i])) ans.push(nums1[i])
            i++;
            j++;
            continue;
        }
        if(nums1[i] > nums2[j]) j++
        else i++
    }
    return ans
};
