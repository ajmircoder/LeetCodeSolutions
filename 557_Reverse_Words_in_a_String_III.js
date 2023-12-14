//557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

// solution - 1;
var reverseStr = function(s, k) {
    let arr = s.split('');
    let left = 0;
    let right = k - 1;  
    let curK = k
    for(let i = 0; i < arr.length; i++){ 
        if(left <= right){
            let cur = arr[left];
            arr[left] = arr[right];
            arr[right] = cur;
            left++;
            right--;
            continue;
        }else{
            if(i % k == 0 && i > curK){
                left = i;
                right = (curK + k + k - 1);
                curK = curK + k + k
            }
        }
     }  
     s = arr.join('')
    return s
};

// solution - 2;
var reverseStr = function(s, k) {  
    let ans = '';
    let i = 0;
    while(i < s.length){ 
        ans += reverse(s , i, i + k - 1) + s.substring(i + k, i + k + k)
        i += k * 2;
    } 
    return ans
};
function reverse (str, i, j) {
    if(j >= str.length){
        j = str.length - 1;
    }
    let reverseStr = ''
    while(i <= j){
        reverseStr += str[j];
        j--
    }
    return reverseStr;
}
