// 941. Valid Mountain Array
// https://leetcode.com/problems/valid-mountain-array/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var validMountainArray = function (arr) {
  let isIncreasing = false,
    isDecreasing = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    } else if (arr[i] < arr[i + 1]) {
      isIncreasing = true;

    if (isDecreasing) return false;
    } else {
      isDecreasing = true;
      if (!isIncreasing) return false;
    }
  }
  
  return isDecreasing && isIncreasing;
};
