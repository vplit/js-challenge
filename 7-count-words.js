/**
 * Problem:
 * Given the sentence. Write a program to get the first word with greatest number of repeated character.
 * 
 * example
 * "We work together." =>  together
 * "I like to eat food" => food
 * "Nice to meet you" => meet
 * "I like cat" => I
 */



function repeatedCharacter(word) {
    let max = 0;
    for(let i = 0; i < word.length; i++){
        let repeated = (word.match(new RegExp(word[i], "g")) || []).length;
        if(repeated > max){
            max = repeated;
        }
    }

    return max;
}

function greatestRepeatedWord(params) {
    let words = params.split(" ");
    let list = {};
    let max = 0;

    for(let i = 0; i < words.length; i++){
        let repeated = repeatedCharacter(words[i]);
        if(repeated > max){
            max = repeated;
        }
        if(!list[repeated]){
            list[repeated] = [];
            list[repeated].push(words[i]);
        }else{
            list[repeated].push(words[i]);
        }
    }

    if(list){
        return list[max][0];
    }

    return '';
}

function greatestRepeatedWord2(params) {
    let tempArr = params.split(" ");

    let sortedArr = tempArr.sort((a, b) => repeatedCharacter(b) - repeatedCharacter(a));

    if(sortedArr.length > 0){
        return sortedArr[0];
    }

    return "";
}



// console.log(greatestRepeatedWord('Niceeee to meetttttt you paa'));
// console.log(greatestRepeatedWord('I love you'));
console.log(greatestRepeatedWord2('Niceeee to meetttt you paa'));
console.log(greatestRepeatedWord2('I love you'));

console.log('test');