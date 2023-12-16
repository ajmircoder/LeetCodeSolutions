// 1507. Reformat Date
// https://leetcode.com/problems/reformat-date/description/

// solution - 1;

// Time complexity: O(n);
// Space complexity: O(1);
var reformatDate = function(date) {
    let month = new Map(
        [["Jan", '01'], ["Feb", '02'], ["Mar", '03'], ["Apr",'04'], ["May", '05'], ["Jun", '06'], 
        ["Jul", '07'], ["Aug", '08'], ["Sep", '09'], ["Oct", '10'], ["Nov", '11'], ["Dec", '12']]
        );
    let dateArr = date.split(' ');
    let str = dateArr[2]+ "-" + month.get(dateArr[1]) + '-' + (dateArr[0].length == 4 ? dateArr[0].substring(0, 2) : ("0" + dateArr[0].substring(0, 1)))
    return str
};
