// 1290. Convert Binary Number in a Linked List to Integer
// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/

var getDecimalValue = function(head) {
    let head2 = head, pow = -1, num = 0;
    while(head){
        pow ++
        head = head.next;
    }
    while(head2){
        num += head2.val * Math.pow(2 , pow);
        head2 = head2.next;
        pow--
    }
    return num;
};
