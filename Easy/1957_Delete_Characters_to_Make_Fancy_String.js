// 1957. Delete Characters to Make Fancy String
// https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var makeFancyString = function(s) {
    let pvr = s[0], count = 0, ans = s[0];
    for(let i = 1; i < s.length; i++){
        if(s[i] == pvr) count++;
        else count = 0;
        if(count == 2){
            while(pvr == s[i+1]) i++;
            count = 0;
            pvr = s[i];
            continue;
        }
        ans+=s[i];
        pvr = s[i];
    }
    return ans
};
