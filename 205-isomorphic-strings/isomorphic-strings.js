/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS=new Map();
    let mapT=new Map();
    for(let i=0;i<s.length;i++){
        const c1=s[i],c2=t[i];
        if ((mapS.get(c1) && mapS.get(c1) !== c2) ||
            (mapT.get(c2) && mapT.get(c2) !== c1)) {
            return false;
        }
        mapS.set(c1,c2);
        mapT.set(c2,c1)

    }
    return true;
};