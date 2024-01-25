// 338. Counting Bits
//https://leetcode.com/problems/counting-bits/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var countBits = function(n) {
    let ans = [0], i = 1;
    while(i <= n){
        ans.push(bitCount(i));
        i++;
    }
    return ans
};
const bitCount = (num)=>{
    let count = 0;
    while(num){
        if(num % 2 == 1){
            count++
        }
        num = Math.floor(num / 2);
    }
    return count
}
