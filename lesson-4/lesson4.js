const name = prompt("What is your name?");
alert(` Hello ${name}!' How are you?`);

const numbers = prompt("Enter a three-digit number")
const str= String(numbers)
const a = str [0]
const b = str [1]
const c = str [2]

const allEqual = ( a === b && b === c );
const anyEqual = ( a === b || b === c || a === c );

console.log("Are all digits the same?", allEqual ? "yes" : "no");
console.log("Are there any matching digits?", anyEqual ? "yes" : "no");

const dateOfBirth = prompt("Enter your date of birth");
const city = prompt("Enter your city");
const sport = prompt("Enter your favourite sport");
const currentYear = new Date().getFullYear();
const age = currentYear - Number(dateOfBirth);

let message ;
if (city === "London") {
    cityMassage = "Do you live in the capital of Great Britain?";
} else if (city.toLowerCase() === "Washington") {
    cityMassage = "Do you live in the capital of the United States?";
} else if (city.toLowerCase() === "Kyiv") {
    cityMassage = "Do you live in the capital of Ukraine?";

} else {
    cityMassage = `Do you live in ${city}?`;
}

const champions = {
    football: "Lionel Messi",
    boxing: "Oleksandr Ysik",
    contrStrike: "Ropz"
};

let sportMessage;
if (sport in champions) {
    sportMessage = `Do you want to be like  ${champions[sport]}?`;
} else {
    sportMessage = `Your favourite sport is ${sport}`;
}

alert(`You are ${age} years old. ${cityMassage}. ${sportMessage}`);

