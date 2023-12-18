// 2264. Largest 3-Same-Digit Number in String
// https://leetcode.com/problems/largest-3-same-digit-number-in-string/description

// Solution: 1;
// Time-Complexity: O(10n) ---> O(n);
// Space-Complexity: O(1);
var largestGoodInteger = function(num) {
    for(let i = 9; i >= 0; i--){
       if(num.includes(`${i}${i}${i}`))  return `${i}${i}${i}`
    }
    return "";
}


// Solution: 2;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var largestGoodInteger = function(num) {
    let goodStr = '';
    for(let i = 0; i < num.length - 2; i++){
        if(num[i] == num[i + 1] && num[i] == num[i + 2]){
            if(Number( num[i] + num[i + 1] + num[i + 2]) > Number(goodStr) || goodStr == ''){
               goodStr = num[i] + num[i + 1] + num[i + 2];
            }
        }
    }
    return goodStr.length ? goodStr : "";
};
