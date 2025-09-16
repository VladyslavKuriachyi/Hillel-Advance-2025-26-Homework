function askNumber() {
    let lastInput = null;

    for (let i = 0; i < 10; i++) {
        let input = prompt('Enter a number greater than 100');
        lastInput = input;

        if (input === null || input.trim() === '' || isNaN(Number(input))) {
            console.log(lastInput);
            return lastInput;
        }
        if (Number(input) > 100) {
            console.log(lastInput);
            return lastInput;
        }
    }
    console.log(lastInput);
}

askNumber();