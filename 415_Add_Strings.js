// 415. Add Strings
//https://leetcode.com/problems/add-strings/description/

// solution - 1;
// time-space - complexity - O(n);
var addStrings = function(num1, num2) {
    let carry = 0, ans = '', isDone = false, i;
    for( i = 0; (i < num1.length || i < num2.length); i++){
        let digit1 = num1[num1.length - i - 1];
        let digit2 = num2[num2.length - i - 1];
        if(!digit1){
            digit1 = '0';
            isDone = true;
        }
        if(!digit2){
            isDone = true;
            digit2 = '0';
        }
        let curAns = Number(digit1) + Number(digit2) + carry;
        ans = curAns % 10 + ans;
        carry = Math.floor(curAns / 10);
        if(isDone && carry == 0){
            break;
        }
    }
    if(isDone && carry == 0){
        if(i < num1.length - 1){
            ans = num1.substring(0, num1.length - i - 1) + ans
        }else if(i < num2.length - 1) {
            ans = num2.substring(0, num2.length - i - 1) + ans
        }
    }
    if(carry){
        ans = carry + ans
    }
    return ans
};

// solution - 2;
// time-space - complexity - O(n);
var addStrings = function(num1, num2) {
    let array;
    let pushArray;
    let length;
    let count = 0;
    let sumArray = [];
    if(num1.length > num2.length){
        length = num1.length;
        pushArray = num2.split('');
        array = num1.split('');
    }else{
        length = num2.length;
        pushArray = num1.split('');
        array = num2.split('');
    }
    length = length - pushArray.length;
    for(let i = 0; i < length; i++){
        pushArray.unshift('0')
    }
    length = pushArray.length;
    for(let i = length - 1; i >= 0; i--){
        if((Number(array[i]) + Number(pushArray[i]) + count) > 9){
            if(!(array[i - 1] || pushArray[i - 1])){
                sumArray.unshift(Number(array[i]) + Number(pushArray[i]) + count);
                break;
            }
            sumArray.unshift((Number(array[i]) + Number(pushArray[i]) + count) % 10);
            count = 1;
         }else{
            if((Number(array[i]) + Number(pushArray[i]) + count) > 9){
                count = 1;
                sumArray.unshift((Number(array[i]) + Number(pushArray[i] ) + count) % 10);
            }else{
              sumArray.unshift(Number(array[i]) + Number(pushArray[i]) + count);
              count = 0;
            }
        }
    }
    return sumArray.join('')
}
