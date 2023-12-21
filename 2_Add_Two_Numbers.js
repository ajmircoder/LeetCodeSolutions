// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/


// Solution: 1;
// Time-Complexity: O(n);
// Space-Coplexity: O(n);
var addTwoNumbers = function(l1, l2) {
    let newList = new ListNode();
    let ans = newList, carry = 0;
    while(l1 || l2){
        let sumVal = (l1 == undefined ? 0 : l1.val) + (l2 ==  undefined ? 0 : l2.val) + carry;
        if(sumVal > 9){
            sumVal = Math.floor(sumVal % 10);
            carry = 1;
        }else{
            carry = 0;
        }
        newList.next = new ListNode( sumVal, null);
        newList = newList.next
        l1 = l1 == undefined ? null : l1.next;
        l2 = l2 == undefined ? null : l2.next;
    }
    if(carry){
        newList.next = new ListNode( carry, null);
    }
    return ans.next;
};
