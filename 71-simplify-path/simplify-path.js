/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stk=[];
    path=path.split('/');
    for(let i=0;i<path.length;i++){
        if(path[i]==='.'||path[i]==='') continue;
        else if(path[i]==='..') stk.pop();
        else stk.push(path[i]);
    }
    return '/'+stk.join('/');
    
};