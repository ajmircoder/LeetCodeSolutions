// 258. Add Digits
//https://leetcode.com/problems/add-digits/description/


var addDigits = function(num) {
    while(num >= 10){
        let cur = num;
        num = 0;
        while(cur !== 0){
            num += cur % 10;
            cur = Math.floor(cur / 10);
        }
    }
    return num
};
