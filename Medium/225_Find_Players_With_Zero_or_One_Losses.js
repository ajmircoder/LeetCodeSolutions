// 2225. Find Players With Zero or One Losses
// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/

// Solution: 1;
// Time-Complexity: o(n);
// Space-Complexity: o(n);
var findWinners = function(matches) {
    let win = [], lose = new Map(), oneLose = [];
    for(let i = 0; i < matches.length; i++){
        if(lose.has(matches[i][1])){
            lose.set(matches[i][1], lose.get(matches[i][1]) + 1)
        }else{
        lose.set(matches[i][1], 1);
        }
    }
    for(let i = 0; i < matches.length; i++){
        if(!lose.has(matches[i][0])){
            lose.set(matches[i][0], 0)
            win.push(matches[i][0]);
        }
    }
    for(let [key, value] of lose){
        if(value == 1){
            oneLose.push(key)
        }
    }
    win.sort((a, b)=> a - b);
    oneLose.sort((a, b)=> a - b);
    return [win, oneLose]
};