//javascript
// subArray
// subString

let arr = [1, 2, 3, 4, 5];
let subArr = [];
const printArry = (l, r, arr)=>{
    let arr1 = [];
    for(let i = l; i <= r; i++){
        arr1.push(arr[i])
    }
    subArr.push(arr1);
    // console.log(arr1);
}
const subSet = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            printArry(i, j, arr)
        }
    }
}
subSet(arr);
