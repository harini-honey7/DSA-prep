/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    const weeks = Math.floor(n/7);
    const days=n%7;
    let total = weeks*28+7*(weeks*(weeks-1)/2);
    const start =weeks+1;
    for(let i=0;i<days;i++){
        total+=start+i;
    }
    return total;

};