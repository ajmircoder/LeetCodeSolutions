// 2785. Sort Vowels in a String
// https://leetcode.com/problems/sort-vowels-in-a-string/description/

// Solution: 1;
// Time-Complexity: O(n(Log(n)));
// Space-Complexity: O(1);
var sortVowels = function(s) {
    s = s.split('');
    let vowel = 'aeiouAEIOU';
    let sVowel = [], index = [];
    for(let i = 0; i < s.length; i++){
        if(vowel.includes(s[i])){
            sVowel.push(s[i]);
            index.push(i);
        }
    }
    sVowel.sort();
    for(let i = 0; i < index.length; i++) s[index[i]] = sVowel[i];
    return s.join('');
};
