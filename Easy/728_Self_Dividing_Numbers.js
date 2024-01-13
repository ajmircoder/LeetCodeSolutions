// 728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/submissions/1111450505/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr = [];
    while(left <= right){
        let cur = left;
        let flag = false;
        for(let i = 0; cur != 0; i++){
            if(left % (cur % 10) == 0){
                flag = true;
                cur = Math.floor(cur / 10);
            }else{
                flag = false;
                break;
            }
        }
        if(flag){
            arr.push(left)
        }
        left++
    }
    return arr
};
