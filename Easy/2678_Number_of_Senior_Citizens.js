// 2678. Number of Senior Citizens
// https://leetcode.com/problems/number-of-senior-citizens/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var countSeniors = function(details) {
    let sixtyPlus = 0;
    for(let d of details){
        let age = Number(d[11] + d[12]);
        if(age > 60) sixtyPlus++
    }
    return sixtyPlus
};
