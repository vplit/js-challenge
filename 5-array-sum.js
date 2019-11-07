/**
 * Given the array of numbers. 
 * Check whether the sum of numbers in array is equal to the lagest number or not
 * Example
 * [1, 2, 4, 7] => true. because 1 + 2 + 4 = 7
 * [1, 2, 43] => false. because 1 + 2 = 3 is difference with 43
 */

function ArraySum1(arr)
{
    if(arr.length < 1){
        return true;
    }
    const sortedArr = arr.sort((a, b) => b - a);
    const largestNum = sortedArr[0];
    const sumOfTheRest = sortedArr.slice(1).reduce((a, b) => a + b, 0);
    
    return largestNum === sumOfTheRest;
}

function ArraySum(arr){
    const sortedArr = arr.sort((a, b) => a - b);
    const largest = sortedArr.pop();

    let sumOfTheRest = 0;
    // sortedArr.forEach(num => {sumOfTheRest += num});
    sumOfTheRest = sortedArr.reduce((a, b) => a + b);

    return sumOfTheRest === largest;
}



console.log(ArraySum([1, 2, 3, 6]));
console.log(ArraySum([1, 2, 6, 6]));