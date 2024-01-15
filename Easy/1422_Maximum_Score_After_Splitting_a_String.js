// 1422. Maximum Score After Splitting a String
// https://leetcode.com/problems/maximum-score-after-splitting-a-string/description

// Solution: 1;
// Time-Complexity: o(n);
// Space-Complexity: o(1);
var maxScore = function(s) {
    let count0 = s[0] == '0' ? 1:0, count1 = 0, ans = 0;
    for(let i = 1; i < s.length; i++){
        if(s[i] == '1'){
            count1++;
        }
    }
    ans = count0 + count1;
    for(let i = 1; i < s.length - 1; i++){
        if(s[i] == '0'){
            count0++
        }else{
            count1--;
        }
        ans = Math.max(ans, count0 + count1);
    }
    return ans
}
