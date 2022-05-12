/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

// your code here

const lastVowelMissing = (word) => {
    const vowels = 'aeiou';

    for (let i = word.length - 1; i > -1; i--) {
        if (vowels.includes(word[i].toLowerCase())) {
            return word.slice(0, i) + word.slice(i + 1)
        }
    }
    return word
}


const hipsterfy = (sentence) => {
    const arr = sentence.split(' ');

    return arr.map(ele => lastVowelMissing(ele)).join(' ');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
