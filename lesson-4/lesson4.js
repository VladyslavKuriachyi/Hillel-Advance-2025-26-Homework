const name = prompt("What is your name?");
alert(` "Hello ${name}!' How are you?"`);

const numbers = prompt("Enter a three-digit number")
const str= String(numbers)
const a = str [0]
const b = str [1]
const c = str [2]

const allEqual = ( a === b && b === c );
const anyEqual = ( a === b || b === c || a === c );

console.log("Are all digits the same?", allEqual ? "yes" : "no");
console.log("Are there any matching digits?", anyEqual ? "yes" : "no");