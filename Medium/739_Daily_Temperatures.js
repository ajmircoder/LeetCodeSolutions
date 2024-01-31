// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/description/?envType=daily-question&envId=2024-01-31

// Solution: 1;
// Time-complexity: O(n^2);
// Space-complexity: O(n);
var dailyTemperatures = function(temperatures) {
    let ans = [], map = new Map();
    for(let i = 0; i < temperatures.length; i++){
        if(map.has(temperatures[i]) && map.get(temperatures[i]) > i){
            ans.push( map.get(temperatures[i]) - i);
            continue;
        }
        let j = i + 1, flag = false;
        while(j < temperatures.length){
            if(temperatures[i] < temperatures[j]){
                map.set(temperatures[i], j)
                ans.push(j - i);
                flag = true;
                break;
            }
            j++
        }
        if(!flag) ans.push(0);
    }
    return ans
};
