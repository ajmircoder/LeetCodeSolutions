//342. Power of Four
// https://leetcode.com/problems/power-of-four/description/

**
 * @param {number} n
 * @return {boolean}
 */

// solution - 1;
var isPowerOfFour = function(n) {
    if(n == 0){
        return false;
    }
    let i = 0, powAns = 0;
    while(powAns < n){
       powAns = Math.pow(4, i);
       i++
    }
   return powAns == n
};

// solution - 2;
var isPowerOfFour = function(n) {
    if(n == 1){
        return true
    }
    if(n == 0 || n % 4 !== 0){
        return false;
    }
    let i = 0, powAns = 0;
    while(powAns < n){
       powAns = Math.pow(4, i);
       i++
    }
    return powAns == n
};
