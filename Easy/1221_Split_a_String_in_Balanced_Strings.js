// 1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let r = 0;
    let l = 0;
    for( let i = 0; i < s.length; i++){
      if(s[i] == "R"){
        r ++
      }else{
        l ++
      }
      if(r == l){
        count++
        r = 0;
        l = 0;
      }
    }
    return count
};
