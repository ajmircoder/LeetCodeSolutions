// 1356. Sort Integers by The Number of 1 Bits;
// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description;


//Soution: 1;
var sortByBits = function(arr) {
    let bitArr = [];
    arr.forEach(a =>  bitArr.push(bits(a)));
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(bitArr[j] > bitArr[j + 1]){
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
                let tem2 = bitArr[j];
                bitArr[j] = bitArr[j + 1];
                bitArr[j + 1] = tem2;
            }else if(bitArr[j] == bitArr[j + 1]){
                if(arr[j] > arr[j + 1]){
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
            }
        }
    }
    return arr;
};
 function bits(num){
    let count=0;
    while(num>0){
        count+=num%2;
        num=Math.floor(num/2);
    }
    return count;
}
