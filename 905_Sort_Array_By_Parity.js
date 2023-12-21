// 905. Sort Array By Parity


// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var sortArrayByParity = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0 ){
            if( i !== index){
                let cur = nums[index];
                nums[index] = nums[i];
                nums[i] = cur
            }
            index++;
        }
    }
    return nums;
};
