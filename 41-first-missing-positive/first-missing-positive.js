/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n=nums.length;
    let map = new Map();
    let max=Math.max(...nums,0);
    for(let i=0;i<nums.length;i++){
    map.set(nums[i],true);
    }
    for(let i=1;i<max;i++){
        if(!map.has(i)){
            return i;
        }
    }
    return max<0 ?1 : max+1;
};