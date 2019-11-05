/**
 * Give an sentence do the capitalization for first character of each word
 * 
 */
/**
 *
 * @param {string} sentence 
 * @return string
 */
 function capitalizeSentence(sentence) {
    let words = sentence.split(" ");
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.substr(1, (word.length -1)));

    return capitalizedWords.join(" ");
 }

 console.log(capitalizeSentence("van phuoc luan"));
