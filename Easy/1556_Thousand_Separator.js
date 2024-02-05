// 1556. Thousand Separator
// https://leetcode.com/problems/thousand-separator/description/

// Solution: 1;
// Time-complexity: O(log(10));
// Space-complexity: O(1);
var thousandSeparator = function(n) {
    if(n < 1000) return n.toString();
    let count = 0, ans = '';
    while(n){
        count++
        ans = (n%10)+ ans;
        n = Math.floor(n /10);
        if(count == 3 && n){
            count=0;
            ans = "."+ans;
        }
        
    }
    return ans;
};
