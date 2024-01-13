// 445. Add Two Numbers II
// https://leetcode.com/problems/add-two-numbers-ii/description/


// Solution: 1;
// Time-complexity: O(n);
// Spacc-complexity: ((n);
var addTwoNumbers = function(l1, l2) {
    let arr1 = [], arr2 = [];
    let newList = null, carry = 0;
    while(l1 || l2){
        if(l1){
            arr1.push(l1.val);
            l1 = l1.next;
        }
       if(l2){
           arr2.push(l2.val);
           l2 = l2.next;
       }  
    }
    for(let i = 0; (i < arr1.length || i < arr2.length); i++){
        console.log(arr1[arr1.length - 1 - i], arr2[arr2.length - 1 - i])
       let curSum = (arr1.length > i ? arr1[arr1.length - 1 - i] : 0) + 
                    (arr2.length > i ? arr2[arr2.length - 1 - i] : 0) + carry;
       if(curSum > 9){
           curSum = curSum % 10;
           carry = 1;
       }else{
           carry = 0
       }
        let temNode = new ListNode( curSum, null);
        temNode.next = newList;
        newList = temNode;
    }
    if(carry){
        let temNode = new ListNode( carry, null);
        temNode.next = newList;
        newList = temNode;
    }
    return newList;
};
