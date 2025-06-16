function targetValue(str, targetStr){
    let targetedStr = targetStr.toLowerCase()

    for(let i = 0; i<str.length; i++){
        if(str[i] === targetStr){
            return true;
        }
    }
    return false
}
console.log(targetValue("shadan","a"))