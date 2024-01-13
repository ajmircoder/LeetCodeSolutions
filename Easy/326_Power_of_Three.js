// 326. Power of Three
// https://leetcode.com/problems/power-of-three/description/


//solution - 1;

var isPowerOfThree = function(n) {
    while( n > 1 ){
        if(n % 3 !== 0){
            return false
        }
        n = n / 3;
    }
     return n == 1 
};

// solution - 2;
var isPowerOfThree = function(n) {
    while( n > 1 ){
        n = n / 3;
    }
     return n == 1 ? true : false
};
