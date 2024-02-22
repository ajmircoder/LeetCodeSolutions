// 706. Design HashMap
// https://leetcode.com/problems/design-hashmap/description/

// Solution: 1;
// Time-Complexity: O(n);
// Space-Complexity: O(1);
var MyHashMap = function() {
    this.map = [];
};
MyHashMap.prototype.put = function(key, value) {
    let flag = true;
    for(let i = 0; i < this.map.length; i++){
        if(this.map[i][0] == key){
            this.map[i] = [key, value];
            flag = false;
            break; 
        }
    }
    if(flag) this.map.push([key, value]);
};
MyHashMap.prototype.get = function(key) {
    for(let i = 0; i < this.map.length; i++){
        if(this.map[i][0] == key){
            return this.map[i][1];
        }
    }
    return -1;
};
MyHashMap.prototype.remove = function(key) {
    this.map = this.map.filter(v => v[0] !== key);
};
