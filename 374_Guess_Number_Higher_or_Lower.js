//374. Guess Number Higher or Lower
// https://leetcode.com/problems/guess-number-higher-or-lower/description/


// Time-complexity - O(log(n))
// space-complexity - O(1)
var guessNumber = function(n) {
   let left = 0;
   while(left <= n){
       let middle = Math.floor(left + ((n - left) / 2));
       if(guess(middle) == 0){
           return middle;
       }
       if(guess(middle) == - 1){
           n = middle - 1
       }else{
           left = middle + 1
       }
   }
};
