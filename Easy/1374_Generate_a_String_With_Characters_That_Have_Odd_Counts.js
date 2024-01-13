// 1374. Generate a String With Characters That Have Odd Counts
// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n == 1){
        return "b"
    }
    let str;
    let length = n - 1
    if(n % 2 == 0){
        str = 'b';
    }else{
        length = n - 2;
        str = "bc";
    }
    for(let i = 0; i < length; i++){
        str += 'a';
    }
    return str;
};
