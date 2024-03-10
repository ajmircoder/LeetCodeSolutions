// 500. Keyboard Row
// https://leetcode.com/problems/keyboard-row/description/


// Solution: 1;
// Time-Complexity: O(n^2);
// Space-Complexity: O(1);
var findWords = function (words) {
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm", ans = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase()
        if (row1.includes(word[0]) && find(row1, word) ||
            row2.includes(word[0]) && find(row2, word) ||
            row3.includes(word[0]) && find(row3, word)) ans.push(words[i]);
    }
    return ans;
};

const find = (row, word) => {
    let flag = true;
    for (let i = 0; i < word.length; i++) {
        if (!row.includes(word[i])) {
            flag = false;
            break;
        }
    }
    return flag;
}
