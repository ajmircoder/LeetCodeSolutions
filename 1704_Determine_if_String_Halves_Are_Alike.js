// 1704. Determine if String Halves Are Alike
// https://leetcode.com/problems/determine-if-string-halves-are-alike/description

// Solution: 1;
// Time-Complexity: o(n);
// Space-Complexity: o(1);
var halvesAreAlike = function(s) {
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let l = 0;
    let r = s.length - 1, count = 0
    while(l < r){
        if(arr.includes(s[l])){
            count++;
        }
        if(arr.includes(s[r])){
            count--;
        }
        l++;
        r--

    }
    return count === 0;
};

// Solution: 2;
// Time-Space-Complexity: o(n);
var halvesAreAlike = function(s) {
    let a = s.substring(0, s.length/2).split(''), b = s.substring(s.length/2, s.length).split(''), count = 0;
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for(let i = 0; i < a.length; i++){
        if(arr.includes(b[i])){
             count++;
         }
         if(arr.includes(a[i])){
             count--;
         }
    }
    return count === 0;
};
