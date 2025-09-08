let N =parseInt(prompt("enter an integer"));

for (let i = 2; i <= N; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
     if (isPrime) {
         alert(i);
     }
}