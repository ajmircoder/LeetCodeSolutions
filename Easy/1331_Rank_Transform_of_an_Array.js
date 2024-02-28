// 1331. Rank Transform of an Array
// https://leetcode.com/problems/rank-transform-of-an-array/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var arrayRankTransform = function(arr) {
    let obj = {}
    let newArr = [...arr].sort((a,b) => a-b)
    let rank = 1
    for(let i = 0; i < newArr.length;i++) {
        if(!obj[newArr[i]]) {
            obj[newArr[i]] = rank
            rank++
        } 
    }
    for(let i = 0; i < arr.length;i++) {
        arr[i] = obj[arr[i]]
    }

    return arr
};
