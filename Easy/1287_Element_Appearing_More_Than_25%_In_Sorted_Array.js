// 1287. Element Appearing More Than 25% In Sorted Array
// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var findSpecialInteger = function(arr) {
    let map = new Map(), haveTo = Math.floor(arr.length/4)
    for(let a of arr){
        map.has(a) ? map.set(a, map.get(a)+1) : map.set(a, 1);
        if(map.get(a) > haveTo) return a;
    }   
};
