// 1441. Build an Array With Stack Operations
// https://leetcode.com/problems/build-an-array-with-stack-operations/description/?envType=daily-question&envId=2024-02-01

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var buildArray = function(target, n) {
    let stream = 1, stack = [], j = 0;
    while(j < target.length){
        if(target[j] == stream){
            stack.push("Push");
            stream++;
            j++
            continue;
        }else{
            stack.push("Push", "Pop");
        }
        stream++;
    }
    return stack;
};
