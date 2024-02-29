// 2696. Minimum String Length After Removing Substrings
// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var minLength = function(s) {
    let i = 0, ans = '', flag = true;
    while(flag){
        flag = false;
        while(i < s.length){
            let str = s[i] + (s[i+1] ? s[i+1] : "");
            if(str !== "AB" && str !== "CD"){
                ans +=s[i];
                i++;
            }else{
                i+=2;
                flag = true;
            }
        }
        s = ans;
        ans = '';
        i = 0;
    }
    return s.length
};
