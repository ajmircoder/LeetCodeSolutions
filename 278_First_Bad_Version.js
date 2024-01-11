// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/description/

// Solution: 1;
// Time-complexity: O(log(n));
// Space=complexity: O(1);
var solution = function(isBadVersion) {
    return function(n) {
        let l = 1;
        let bV;
        while(l <= n){
            let m = l + Math.floor((n - l) / 2);
            if(isBadVersion(m)){
                bV = m;
                if(!isBadVersion(m -1)){
                    return m
                }
                n = m - 1;
            }else{
                l = m + 1
            }
        }
        return bV
    };
};
