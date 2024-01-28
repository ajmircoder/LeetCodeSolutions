// 476. Number Complement
// https://leetcode.com/problems/number-complement/description/

// Solution: 1;
// Time-complexity: O(logN);
// Space-complexity: O(1);
var findComplement = function(num) {
    let ans = 0, power = 0;
    while(num){
        ans+= ((num % 2) == 1 ? 0:1) * (Math.pow(2, power));
        power++
        num = Math.floor(num / 2);
    }
    return ans
};


// Solution: 2;
// Time-complexity: O(n);
// Space-complexity: O(1);
var findComplement = function(num) {
    let str = '', ans = 0, power = 0;
    while(num){
        let modu = num % 2;
        if(modu == 1) str = '0'+ str;
        else str = '1' + str;
        num = Math.floor(num / 2);
    }
    for(let i = str.length - 1; i >= 0; i--){
       ans+= str[i] * (Math.pow(2, power));
        power++
    }
    return ans
};
