// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/description

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(n);
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

MyQueue.prototype.pop = function() {
    if(this.stack2.length) return this.stack2.pop();
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
};

MyQueue.prototype.peek = function() {
    if(this.stack2.length) return this.stack2[this.stack2.length -1];
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    return this.stack2[this.stack2.length -1];
};

MyQueue.prototype.empty = function() {
    return (this.stack1.length || this.stack2.length) ? false : true;
};

// Solution: 2;
// Time-complexity: O(n);
// Space-complexity: O(n);
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function(x) {
     while(this.stack2.length){
         this.stack1.push(this.stack2.pop());
     }
     this.stack1.push(x);
};

MyQueue.prototype.pop = function() {
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    
    return this.stack2.pop();
};

MyQueue.prototype.peek = function() {
     return this.stack1[0] || this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function() {
    return (this.stack1.length || this.stack2.length) ? false : true;
};

// Solution: 3;
// Time-complexity: O(n);
// Space-complexity: O(n);
var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

MyQueue.prototype.pop = function() {
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    let result = this.stack2.pop();
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop());
    }
    return result;
};

MyQueue.prototype.peek = function() {
    while(this.stack1.length){
        this.stack2.push(this.stack1.pop());
    }
    let result = this.stack2[this.stack2.length - 1];
    while(this.stack2.length){
        this.stack1.push(this.stack2.pop());
    }
    return result;
};

MyQueue.prototype.empty = function() {
    return !this.stack1.length;
};
