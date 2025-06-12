const arr = [1,2,3,4,5,5,3,4,2,1];

function findUniqueElement(arr){
    let unique = [];
    let seen = {};

    for(let item of arr){
        if(!seen[item]){
            unique.push(item);
            seen[item] = true;
        }
    }
    return unique;
}
console.log(findUniqueElement(arr))