// 2706. Buy Two Chocolates
// https://leetcode.com/problems/buy-two-chocolates/description


// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(n);
var buyChoco = function(prices, money) {
    prices.sort(function(a,b){return a - b}), count = 0, leftOver = money;
    for(let i = 0; i < prices.length; i++){
        if(leftOver >= prices[i]){
            let curLeftOver = leftOver - p[i];
            if(curLeftOver < 0){
                return money;
            }
            leftOver = curLeftOver;
            count++;
            if(count == 2){
                return leftOver;
            }
        }else{
            return money;
        }
    }
};

// Solution: 2;
// Time-Complexity: O(1);
// Space-Complexity: O(1);
var buyChoco = function(prices, money) {
    let twoChoco = prices[0] + prices[1];
    if(twoChoco <= money){
        return money - twoChoco
    }else{
        return money
    }
};
