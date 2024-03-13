// 2485. Find the Pivot Integer
// https://leetcode.com/problems/find-the-pivot-integer/?envType=daily-question&envId=2024-03-13

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var pivotInteger = function (n) {
    let leftPtr = 1
    let rightPtr = n
    let leftSum = 1
    let rightSum = n
    while (leftPtr < rightPtr) {
        if (leftSum < rightSum) {
            leftPtr += 1
            leftSum += leftPtr
        } else if (leftSum > rightSum) {
            rightPtr -= 1
            rightSum += rightPtr
        } else {
            leftPtr += 1
            rightPtr -= 1
            leftSum += leftPtr
            rightSum += rightPtr
        }
    }
    const isPossible = leftSum === rightSum ? leftPtr : -1
    return isPossible
};
