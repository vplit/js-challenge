/*  
Problem description
Given an array of numbers. Write program to return sencond lowest and second biggest numbers
Sample:
[3, 7, -6, 90, 100, 3, -6, 90, 10] => (3, 90)
[1] => (1)
[2, 3] => (2, 3)
*/

// Solution

/**
 * 
 * @param {array} numbers 
 */
function secondValues(numbers) {
    const asendingSortedNumbers = numbers.sort((a, b) => a - b);
    const uniqueNumbers = [...new Set(asendingSortedNumbers)];

    if(!uniqueNumbers.length){
        return "()";
    }

    if(uniqueNumbers.length === 1){
        return `(${uniqueNumbers[0]})`;
    }

    if(uniqueNumbers.length === 2){
        return `(${uniqueNumbers[0]},${uniqueNumbers[1]})`;
    }

    return `(${uniqueNumbers[1]},${uniqueNumbers[uniqueNumbers.length - 2]})`
}

console.log(secondValues([3, 7, -6, 90, 100, 3, -6, 90, 10]));
console.log(secondValues([]));
console.log(secondValues([2, 6, 8]));
console.log(secondValues([6, 8]));
console.log(secondValues([8]));
