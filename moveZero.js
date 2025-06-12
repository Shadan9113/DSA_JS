const nums = [0,1,0,2,0,3,1]

function moveZero(nums){
    let result1 = [];
    let result2 = [];

    for(let i=0; i<nums.length; i++){
        if(nums[i] >= 1){
            result1.push(nums[i])
        }
    }
    for(let j=0; j<nums.length; j++){
        if(nums[j] === 0){
            result2.push(nums[j])
        }
    }
    let result3 = [...result1,...result2];
    return result3
}
console.log(moveZero(nums))