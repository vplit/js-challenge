/**
 * Get first longest word from given sentence
 * @param {string} sentence 
 * @returns {string}
 */
function getLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = '';

    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }

    console.log(longestWord);
    return longestWord;
}

/**
 * Get list of longest words
 * @param {string} sentence 
 * @return array
 */
function getLongestWords(sentence) {
    let words = sentence.split(" ");
    let biggestSize = 0;
    let longestWords = [];

    for(let word of words){
        if(word.length > biggestSize){
            biggestSize = word.length;
            longestWords = [];
            longestWords.push(word);
        }else if(word.length === biggestSize && !longestWords.indexOf(word) === -1){
            longestWords.push(word);
        }
    }

    return longestWords;
}

/**
 * Get list of longest words by buil in function in JS
 * @param {string} sentence 
 * @returns {array}
 */
function getLongestWordBuilIn(sentence) {
    let words = sentence.split(" ");
    let sortedWords = words.sort((a, b) => b.length - a.length);

    let longestWords = sortedWords.filter(a => a.length === sortedWords[0].length);

    let longestWordsUnique = [...new Set(longestWords)];
    
    return longestWordsUnique;
}

console.log(getLongestWord("I am ready for today123"));
console.log(getLongestWords("I am today123 ready for today123"));
console.log(getLongestWordBuilIn("I today123 am ready for today123"));