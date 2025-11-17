/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res=[];
    function permutation(i){
        if (i===nums.length){
            res.push([...nums]);
            return;
        }
        for(let j=i;j<nums.length;j++){
            swap(nums,i,j);
            permutation(i+1);
            swap(nums,i,j);
        }
    }
    permutation(0);
    return res;

};
var swap=function(nums,i,j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}