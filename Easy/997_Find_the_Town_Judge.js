// 997. Find the Town Judge
// https://leetcode.com/problems/find-the-town-judge/description

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var findJudge = function(n, trust) {
    if(!trust.length && n == 1) return 1;
    let trustOne = new Set(), trustNoOne = new Map();
    for(let i = 0; i < trust.length; i++){
        let one = trust[i][1];
        trustOne.add(trust[i][0]);
        trustNoOne.has(one) ? trustNoOne.set(one, trustNoOne.get(one)+1) : trustNoOne.set(one, 1);
    }
    for(let [key, value] of trustNoOne){
        if((value == n-1) && !trustOne.has(key)) return key;
    }
    return -1;
};
