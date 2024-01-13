// 796_Rotate_String
// https://leetcode.com/problems/rotate-string/submissions/1108814019/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */


var rotateString = function(s, goal) {
    for(let i = 0; i < s.length; i++){
        if((s.slice(i, s.length) + s.slice(0, i)) == goal){
        return true;
        }
    }
    return false;
};
