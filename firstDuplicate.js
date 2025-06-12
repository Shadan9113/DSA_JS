function firstDuplicate(arr){
    let seen  = {};

    for(let item of arr){
        if(seen[item]){
            return item;
        }else{
            seen[item] = true
        }
    }
    return null
}
console.log(firstDuplicate([1,2,3,4,2,3,4]))