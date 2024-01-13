// 821. Shortest Distance to a Character
// https://leetcode.com/problems/shortest-distance-to-a-character/submissions/


/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let arr =[];
    let answer = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == c){
            arr.push(i);
        }
    }
    for(let i = 0; i < s.length; i++){
        let md = s.length;
        for(let j = 0; j < arr.length; j++){
           md = Math.min(Math.abs(i - arr[j]), md)
            // curr_dist = Math.abs(i - arr[j])
            // if (curr_dist < md) {
            //     md = curr_dist;
            // }
        }
        answer.push(md)
    }
    return answer
};
