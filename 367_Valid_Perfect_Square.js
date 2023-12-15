// 367. Valid Perfect Square
// https://leetcode.com/problems/valid-perfect-square/description/

var isPerfectSquare = function(num) {
    if(num == 0){
        return false;
    }
    let i = 1, powAns = 0;
    while(powAns < num){
        if(num == i * i){
           return true
        }
        powAns = i * i;
        i++
    }
    return false
};
