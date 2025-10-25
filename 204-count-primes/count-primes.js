/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count=0;
    for(let i=2;i<n;i++){
        if(primes(i)){
            count++;
        }
    }
    return count;
}; 
function primes(n){
    if(n<=1) return false;
    if(n===2||n===3) return true;
    if(n%2===0||n%3===0) return false;
    for(let i=5;i<=Math.sqrt(n);i+=6){
        if(n%i===0||n%(i+2)===0){
            return false;
        }
    }
   return true;
}
