// 1535. Find the Winner of an Array Game
// https://leetcode.com/problems/find-the-winner-of-an-array-game/description/

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var getWinner = function(arr, k) {
    let winner = arr[0];
    let wins = 0;
    for (let i = 1; i < arr.length; i++) {
        if (winner > arr[i])
            wins++;
        else {
            wins = 1;
            winner = arr[i];
        }
        
        if (wins == k)
            break;
    }
    return winner;
};
