let result = "";
for (let i = 20; i <= 30; i += 0.5) {
    result += i + " ";
    console.log(result.trim());
}


const rate = 26;
for (let dollars = 10; dollars <= 100; dollars = dollars + 10) {
    console.log(`${dollars} USD = ${dollars * rate} UAH`);
}