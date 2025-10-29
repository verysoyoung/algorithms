

var reverseParentheses = function(s) {
    let stack = [];
    for(const n of s){
        if(n !== ")"){
            stack.push(n)
        }else{
            let buf = [];
            while(stack.length && stack[stack.length-1] !== "("){
                buf.push(stack.pop());
            }
            stack.pop();
            stack.push(...buf)
            console.log(stack)
        }
        
    }
    return stack.join("");
};



conosle.log(reverseParentheses("(u(love)i)")) //iloveu

