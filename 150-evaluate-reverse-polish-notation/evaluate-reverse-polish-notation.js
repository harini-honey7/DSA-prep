/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stk=[];
    for(let i=0;i<tokens.length;i++){
        let t=tokens[i];
        if(t==='+'|| t==='-'||t==='*'||t==='/'){
            let a=stk.pop();
            let b=stk.pop();
            let val;
            switch(t){
                case'+':
                val=b+a;
                break;
                case'-':
                val=b-a;
                break;
                case'*':
                val=b*a;
                break;
                case'/':
                val=b/a;
                val=val>0?Math.floor(val):Math.ceil(val);
                break;
            }
            stk.push(val);
        }else{
            stk.push(Number(t));
        }
    }
    return stk.pop();
};