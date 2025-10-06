document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Form submitted");

        const nameValue = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        const nameRegex = /^[a-zA-Z]+$/;

        if (nameRegex.test(nameValue)) {
            nameError.textContent = "";
            console.log("Name is valid");
        } else {
            nameError.textContent = "Please enter a valid name.";
            console.log("Name is invalid");
        }

        const messageValue = messageInput.value.trim();
        const messageRegex = /^.{5,}$/;
        if (messageRegex.test(messageValue)) {
            console.log("Message is valid");
        } else {
            console.log("Message is invalid");
        }

        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^\+380\d{9}$/;
        if (phoneRegex.test(phoneValue)) {
            console.log("Phone is valid");
        } else {
            console.log("Phone is invalid");
        }

        const emailValue = emailInput.value.trim();
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (emailRegex.test(emailValue)) {
            console.log("Email is valid");
        }

    });
});

