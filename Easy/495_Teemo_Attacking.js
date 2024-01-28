// 495. Teemo Attacking
// https://leetcode.com/problems/teemo-attacking/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var findPoisonedDuration = function(timeSeries, duration) {
    let i = 0, count = 0, pvr = 0;
    while(i < timeSeries.length){
        let cur = timeSeries[i] + duration;
        count += (cur - pvr) < duration ? (cur - pvr) : duration;
        pvr = cur;
        i++
    }
    return count;
};
