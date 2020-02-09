/**
 * Problem
 *
 * Given a array of number. Get the most repeated number in the array. I not found any repeated number return -1.
 * e.g:
 *  [5, 5, 8, 0, 1] -> 5
 * [6, 5, 7, 4, 8, 0, 9, 8, 1, 8, 8, 0, 5, 6] -> 8
 * [1, 2, 3, 4, 5] -> -1
 */
function getMostRepeatNumber(numbers) {
  let countedNumbers = {};
  let result = {
    number: -1,
    repeatedTime: 0
  };

  for (count in numbers) {
    const number = numbers[count];
    if (countedNumbers[number]) {
      countedNumbers[number] = countedNumbers[number] + 1;

      if (
        countedNumbers[number] > 1 &&
        countedNumbers[number] > result.repeatedTime
      ) {
        result.number = number;
        result.repeatedTime = countedNumbers[number];
      }
    } else {
      countedNumbers[number] = 1;
    }
  }
  return result.number;
}

let arg = [5, 5, 8, 0, 1];
console.log(getMostRepeatNumber(arg));
console.log(getMostRepeatNumber([6, 5, 7, 4, 8, 0, 9, 8, 1, 8, 8, 0, 5, 6]));
console.log(getMostRepeatNumber(arg));
