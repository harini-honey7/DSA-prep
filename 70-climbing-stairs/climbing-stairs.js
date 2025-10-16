/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===0||n===1)
        return 1;
    let prev=1,curr=1;
    for(let i=2;i<=n;i++){
        let next=prev+curr;
        prev=curr;
        curr=next;

    }
    return curr;
};