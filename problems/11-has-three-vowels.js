/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/


// your code here

const hasThreeVowels = str => {
    let newArr = str.split('');
    let result = [];

    const vowels = 'aeiou';


    newArr.forEach(char => {
        console.log(char)
        if (vowels.includes(char.toLowerCase())) {
            result.push(char.toLowerCase())
        }
    })

    let set = new Set(result);
    const finalArr = Array.from(set);

    return (finalArr.length > 2)
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
