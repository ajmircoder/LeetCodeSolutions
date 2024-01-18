// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/description

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var climbStairs = function(n) {
    let num = 0;
    let num2 = 1, count = 0
    while(count <= n){
       let temnum = num + num2;
       num = num2;
       num2 = temnum;
       count++
    }
    return num
};


// Solution: 1;
// Time-complexity: O(1);
// Space-complexity: O(1);
var climbStairs = function(n) {
    let memo = new Map();
    return findN(0, n, memo);   
};
function findN(step, n, memo){
    if(step == n){
        return 1
    };
    let count = 0;
    if(memo.has(step)) count = memo.get(step);
    else{
        count += findN(step+1, n, memo);
        if(step + 2 <= n) count += findN(step+2, n, memo);
        memo.set(step, count);
    }
    return count;
}
