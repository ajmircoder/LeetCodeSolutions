// 1342. Number of Steps to Reduce a Number to Zero
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(log(n);
var numberOfSteps = function(num) {
   let ans = 0;
   while(num){
       while(num % 2 == 0){
           num = num / 2;
           ans++;
       };
       if(num == 0) break;
       num-=1;
       ans++
   } 
   return ans
};
