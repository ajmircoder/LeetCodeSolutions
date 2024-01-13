// 202. Happy Number
// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n) {
    let set = new Set()
    while(n !== 1){
        let cur = n;
        n = 0
        while(cur !== 0){
        let lastDigit = (cur % 10)
        n += (lastDigit * lastDigit);
        cur = Math.floor(cur / 10);
       }
       if(set.has(n)){
            return false
        }
       set.add(n)
    }
    return n == 1
};
