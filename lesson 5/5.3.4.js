let N =parseInt(prompt("enter a number N"));

for (let i = 1; i < 100; i++) {
    if (i * i <= N) {
        console.log(i);
    }
}