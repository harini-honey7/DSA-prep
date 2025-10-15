/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1 || s.length<numRows){
        return s;
    }
    let direction=false;
    let count=0;
    let arr=new Array(numRows).fill("");
    for(let char of s){
        arr[count]+=char;
        if(count===0||count>=numRows-1) direction=!direction;
        direction ? count++ : count--;
    }
    return arr.join('');
    
    
};