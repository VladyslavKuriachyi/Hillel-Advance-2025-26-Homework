function removeChars(text, charsToRemove) {
    return text
    .split('')
    .filter(char => !charsToRemove.includes(char))
    .join('');

}
const userInput = prompt('Enter the text');
const charsToRemove = prompt('Enter the characters to remove');
const result = removeChars(userInput, charsToRemove);
alert(result);
