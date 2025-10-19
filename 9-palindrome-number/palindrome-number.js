/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) =>{
    const str = x.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome(121));