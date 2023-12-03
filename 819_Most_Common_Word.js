// 819. Most Common Word
// https://leetcode.com/problems/most-common-word/submissions/1105363384/
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let arr = paragraph.toLowerCase().split(/[\s!?,';.\-]+/);
    let obj = {};
    let max = 0
    let str = ''
    if(arr[arr.length - 1] == ''){
        arr.pop();
    }
    for(let i = 0; i < arr.length; i++){
        let flag = false;
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]]++;  
            flag = true;     
        }
        else if(!(banned.includes(arr[i]))){
            flag = true; 
            obj[arr[i]] = 1;
        }
        if(flag && max < obj[arr[i]]){
                max = obj[arr[i]];
                str = arr[i];
            }
    }
    return str; 
};
