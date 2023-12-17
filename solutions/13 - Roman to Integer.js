/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = roman[s.charAt(s.length - 1)];
    
    for(let i = 0; i < s.length - 1; i++){
        if(roman[s.charAt(i)] >= roman[s.charAt(i + 1)]){
            total += roman[s.charAt(i)];
        } else{
            total -= roman[s.charAt(i)];
        }
    }

    return total;
};