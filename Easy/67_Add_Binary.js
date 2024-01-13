// 67. Add Binary
// https://leetcode.com/problems/add-binary/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var addBinary = function(a, b) {
    let str = '', carry = 0;
   for(let i = 0; (i < a.length || i < b.length); i++){
      aI = a.length > i ? a[a.length - 1 -i] : 0;
      bI = b.length > i ? b[b.length - 1 -i] : 0;
      let abSum = Number(aI) + Number(bI) + carry;
      if(abSum == 3){
          str = "1" + str ;
          carry = 1;
      }else if(abSum == 2){
          str = "0" + str;
          carry = 1;
      }else if(abSum == 1){
          str = "1" + str;
          carry = 0;
      }else{
          str = "0" + str ;
          carry = 0;
      }
   }
   if(carry){
       str = "1" + str;
   }
   return str
};
