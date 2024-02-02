// 1291. Sequential Digits
// https://leetcode.com/problems/sequential-digits/description/?envType=daily-question&envId=2024-02-02

// Solution: 1;
// Time-complexity: O(n)
// Space-complexity: O(n);
var sequentialDigits = function(low, high) {
    let temLow = low, start = 1, startNum = '',push = '';
    while(temLow){
        startNum += (start++).toString();
        push+='1'
        temLow = Math.floor(temLow / 10);
    }
    let ansNum = Number(startNum)
    let ans = ansNum >= low && ansNum <= high? [ansNum] : [], temstartNum = startNum,flag = false;
    while(Number(startNum) <= high){
        let num1 = Number(startNum), num2 = Number(push);
        let sum = num1+num2;
        startNum = sum.toString();
        if(Number(startNum[startNum.length - 1]) + 1 > 9 || startNum[startNum.length - 1] == '0'){
            startNum = temstartNum + (Number(temstartNum[temstartNum.length - 1]) + 1).toString();
            push+="1";
            temstartNum = startNum;
            flag = true;
        }
        if(sum >= low && sum <= high && !(startNum[startNum.length - 1] == '0')){
            ans.push(sum);
        }
        let numstartNum = Number(startNum);
        if(flag && numstartNum <= high && !(startNum[startNum.length - 1] == '0')){
            ans.push(numstartNum);
            flag=false;
        }
    }
   return ans
};
