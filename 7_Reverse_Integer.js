// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/description/

// Solution: 1;
// Time-Space-Complexity: O(n);
var reverse = function(x) {
    let num;
    if(x == 0){
        return 0;
    }else if(x > 0){
        num = ''
    }else{
        num = '-';
    }
    x = Math.abs(x)
    while(x){
        if((num == '' || num == '-') && x % 10 == 0){
            x = Math.floor(x / 10)
            continue;
        }
        num += (x % 10).toString();
        x = Math.floor(x / 10)
    }
    let numberNum = Number(num)
    if(numberNum > Math.pow(2, 31) - 1 || numberNum < -Math.pow(2, 31)){
        return 0;
    }
    return numberNum;
};
