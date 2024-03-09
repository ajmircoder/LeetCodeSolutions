// 1323. Maximum 69 Number
// https://leetcode.com/problems/maximum-69-number/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var maximum69Number  = function(num) {
    num = num.toString().split('');
    let i = 0;
    while( i < num.length){
       if(num[i] == '6'){
           num[i] = '9';
           break;
       }
       i++
    }
    return Number(num.join(''));
};
