/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map =new Map();
    for(let char of strs){
        let key =char.split('').sort().join('');
        if(!map.has(key)){
            map.set(key,[]);
        }
        map.get(key).push(char);
    }
    return Array.from(map.values());
    
};