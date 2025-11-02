/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let pre=strs[0];
    let prelen=pre.length;

    for(let i=1;i<strs.length;i++){
        let s=strs[i];
        while(pre !==s.substring(0,prelen)){
            prelen--;
            if(prelen===0){
                return "";
            }
            pre= pre.substring(0,prelen);
        }
    }
    return pre;
    
};