// 405. Convert a Number to Hexadecimal
// https://leetcode.com/problems/convert-a-number-to-hexadecimal/description/

// Solution: 1;
// Time-complexity: O(log₁₆N);
// Space-complexity: O(1);
var toHex = function(num) {
    if(num == 0){
        return '0'
    }
    num = num > 0 ? num : Math.pow(2,32)+num;
    const myMap = new Map([
                [10, 'a'],
                [11, 'b'],
                [12, 'c'],
                [13, 'd'],
                [14, 'e'],
                [15, 'f']
            ]);
    let output = '';
    while(num){
        let modu = num % 16;
        if(modu > 9) output = myMap.get(modu) + output;
        else output = modu + output;
        if(num < 16){
            break;
        }
        num = Math.floor(num / 16);
    }
    return output;
};
