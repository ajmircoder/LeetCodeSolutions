// 1758. Minimum Changes To Make Alternating Binary String
// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description

var minOperations = function(s) {
    let count10 = 0, count01 = 0, isOne = true;
    for(let i = 0; i < s.length; i++){
        let str10 = '', str01 = '';
        str10 = isOne ? "1" : "0";
        str01 = isOne ? "0" : "1";
        isOne = !isOne;
        if(str10 !== s[i]){
            count10++
        }
        if(str01 !== s[i]){
            count01++
        }
    }
    return  count10 > count01 ? count01 : count10;
};

var minOperations = function(s) {
    let str10 = '', str01 = '', count10 = 0, count01 = 0;
    for(let i = 0; i < s.length; i++){
        if(str10.length % 2 == 0){
            str10 += "1";
            str01 += "0";
        }else{
            str10 += "0";
            str01 += "1";
        }
        if(str10[i] !== s[i]){
            count10++
        }
        if(str01[i] !== s[i]){
            count01++
        }
    }
    return  count10 > count01 ? count01 : count10;
