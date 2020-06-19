/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2) return false;
    const map = {"(":")", "[":"]", "{":"}"}
    let old = s.split("");
    let now = [];

    while(old.length){
        let leftChar = old.pop();
        if(map[leftChar]){
            if(map[leftChar] != now.pop()){
                return false;
            }
        }else{
            now.push(leftChar);
        }
    }
    return true;
};