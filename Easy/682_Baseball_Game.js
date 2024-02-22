// 682.Baseball Game
// https://leetcode.com/problems/baseball-game/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var calPoints = function(operations) {
    let ans = [];
    for(let op of operations){
        if(op == "+"){
            ans.push(ans[ans.length-1]+ans[ans.length-2]);
        }else if(op == "D"){
            let pvr = ans[ans.length-1];
            ans.push(pvr*2);
        }else if(op == "C"){
            ans.pop();
        }else{
            ans.push(Number(op));
        }
    }
    return ans.reduce((accumulator, currentValue) => accumulator + currentValue,0);
    
};
