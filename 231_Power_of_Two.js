//231. Power of Two
//https://leetcode.com/problems/power-of-two/description/


// Solution- 1
var isPowerOfTwo = function(n) {
    if(n == 0){
        return false;
    }
    let sqNum = 1
    while (sqNum <= n){
        if(sqNum == n) return true;
        sqNum*=2
    }
    return false;
};

// Solution- 2
var isPowerOfTwo = function(n) {
    if(n == 0){
        return false;
    }
    let sqNum = 1
    while (sqNum <= n){
        if(sqNum == n) return true;
        sqNum*=2
    }
    return false;
};
