// <------> with zero formula (n*(n+1)) / 2;

function missingNumber(nums){
    const n  = nums.length;

    let expectedSum = (n*(n+1)) / 2;

    let actualSum = 0;

    for(let i=0; i<nums.length; i++){
        actualSum += nums[i];
    }
    return expectedSum - actualSum

}
console.log(missingNumber([0,1,3,4]))





// <----------> without zero formula ((firstnum+lastnum)*count) / 2; for count = (lastNum-firstNum+1)



function missingNumber(nums, firstNum, lastNum){
    let count = lastNum - firstNum + 1;
    let expectedSum = ((firstNum+lastNum)*count) / 2;

    let actualSum = 0;

    for(let num of nums){
        actualSum += num;
    }
    return expectedSum - actualSum;

}
console.log(missingNumber([10,11,13,14,15],10,15))