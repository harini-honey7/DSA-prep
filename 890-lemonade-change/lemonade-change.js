/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives=0,tens=0;
    for(let i=0;i<bills.length;i++){
        if(bills[i]===5){
            fives+=1;
        }else if(bills[i]===10){
            if(fives){
                fives-=1;
                tens+=1;
            }else{
                return false;
            }
        }else{
            if(fives&&tens){
                fives-=1;
                tens-=1;
            }else if(fives>=3){
                fives-=3;
            }else{
                return false;
            }
        }
        
    }
    return true;

    
};