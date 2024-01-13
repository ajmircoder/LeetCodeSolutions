// 575. Distribute Candies
// https://leetcode.com/problems/distribute-candies/description/

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let canEatType = 1, curType = new Set([candyType[0]]); 
    for(let i = 1; i < candyType.length; i++){
        if(candyType.length / 2 == canEatType){
            break;
        }
        if(!curType.has(candyType[i])){
            curType.add(candyType[i]);
            canEatType += 1;
        }
    }
    return canEatType
};
