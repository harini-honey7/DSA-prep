/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res=[];
    let ans=[];
    function allSubsets(i){
        if(i===nums.length){
            res.push([...ans]);
            return;
        }
        ans.push(nums[i]);
        allSubsets(i+1);
        ans.pop();
        allSubsets(i+1);
    }
    allSubsets(0);
    return res;
    
};