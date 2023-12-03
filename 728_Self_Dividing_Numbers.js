// 728. Self Dividing Numbers


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
