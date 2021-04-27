// Ejemplo de Palindromo

alert('In the following box you can verify if your word is Palindrome')
let word = prompt('Your Word');

console.log(`The word writed was: ${word}`);

function isPalindrome(aWord) {
    const arrayWord = []
    let revertedWord = ''

    for (let i = 0; i < aWord.length; i++) {
        arrayWord.push(aWord[i]);   
    }
    
    for (let i = 0; i < aWord.length; i++) {
        let lyric = arrayWord.pop()
        revertedWord = revertedWord + lyric
    }
    if (word === revertedWord) {
        return console.log('This word is Palindrome')
    } else {
        return console.log('This word is not Palindrome')
    }
};

isPalindrome(word);

