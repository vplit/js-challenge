/**
 * Given a array of numbers.
 * Return reversed array
 * @param {array} numbers
 */

const reverseArray1 = numbers => {
  let reversedArr = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArr.push(numbers[i]);
  }

  return reversedArr;
};

const reverseArray2 = numbers => {
  let reversedArr = [];

  for (const number of numbers) {
    reversedArr.unshift(number);
  }

  return reversedArr;
};

const reverseArray3 = numbers => {
  let reversedArr = [...numbers];
  const pivot = reversedArr.length / 2;
  for (let i = 0; i < pivot; i++) {
    const left_index = i;
    const right_index = reversedArr.length - 1 - i;
    const left_number = reversedArr[left_index];
    const right_number = reversedArr[right_index];
    reversedArr[left_index] = right_number;
    reversedArr[right_index] = left_number;
  }

  return reversedArr;
};

const reverseArrayReduce = numbers => {
  let reversedArr = numbers.reduce((acc, current_number) => {
    acc.unshift(current_number);
    return acc;
  }, []);

  return reversedArr;
};

console.log(reverseArray1([1, 2, 3, 6, 7]));
console.log(reverseArray2([1, 2, 3, 6, 7]));
console.log(reverseArray2([1, 2, 3, 6, 7]));
console.log(reverseArrayReduce([1, 2, 3, 6, 7]));
