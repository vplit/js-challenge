/**
 * Give a string. write the program to determine whether all characters are unique or not
 * 
 * Example
 * 'abcd' return 'true', all character are uinque.
 * 'aabcd' return 'false', because a character is duplicated.
 */

/**
 * 
 * @param {string} str 
 * @returns boolean
 */
function isUniqueLettersWithArray(str){
    let letters = [];

    for(let letter of str){
        if(letters.indexOf(letter) > -1){
            return false;
        }else{
            letters.push(letter);
        }
    }

    return true;
}

/**
 * @param {string} str 
 * @returns boolean
 */
function isUniqueLettersWithObject(str) {
    let dictionary = {};

    for(let letter of str){
        if(dictionary[letter]){
            return false;
        }else{
            dictionary[letter] = 1;
        }
    }

    return true;
}


/**
 * @param {string} str 
 * @returns boolean
 */
function isUniqueLettersWithLastIndex(str) {
    for(let i = 0; i < str.length; i++){
        if(str.lastIndexOf(str[i]) > i){
            return false;
        }
    }

    return true;
}

/**
 * @param {string} str 
 * @returns boolean
 */
function isUniqueLettersUseSet(str) {
    let lettersInSet = new Set(str);
    return lettersInSet.size === str.length;
}

console.log(isUniqueLettersWithArray("abeffcabcef"));
console.log(isUniqueLettersWithObject("abcef"));
console.log(isUniqueLettersWithLastIndex("abcef"));
console.log(isUniqueLettersUseSet("abceff"));