// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/?envType=daily-question&envId=2024-01-30

// Solution: 1;
// Time-complexity: O(n);
// Space-complexity: O(1);
var evalRPN = function(tokens) {
    let stack = [];
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] == '*'){
            let result = stack.pop() * stack.pop();
            stack.push(result);
        }else if(tokens[i] == '+'){
            let result = stack.pop() + stack.pop();
            stack.push(result);
        }else if(tokens[i] == '-'){
            let last = stack.pop();
            let result = stack.pop() - last;
            stack.push(result);
        }else if(tokens[i] == '/'){
            let last = stack.pop();
            let result = stack.pop() / last;
            result = result <= 0  ? Math.ceil(result) : Math.floor(result);
            stack.push(result);
        }else stack.push(Number(tokens[i]));
    }
    return stack[0]
};
