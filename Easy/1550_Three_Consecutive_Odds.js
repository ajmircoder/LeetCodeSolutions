// 1550. Three Consecutive Odds
// https://leetcode.com/problems/three-consecutive-odds/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var threeConsecutiveOdds = function(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            count++;
            if(count == 3) return true;
        }else count = 0;
    }
    return false;
};
