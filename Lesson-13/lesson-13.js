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
        const nameRegex = /^[a-zA-Z\s]+$/;

        if (nameRegex.test(nameValue)) {
            nameError.textContent = "";
            console.log("Name is valid");
        } else {
            nameError.textContent = "Please enter a valid name.";
            console.log("Name is invalid");
        }

        const messageValue = messageInput.value.trim();
        const messageError = document.getElementById('messageError');
        const messageRegex = /^.{5,}$/;
        if (messageRegex.test(messageValue)) {
            messageError.textContent = "";
            console.log("Message is valid");
        } else {
            messageError.textContent = "Please enter a valid message";
            console.log("Message is invalid");
        }

        const phoneValue = phoneInput.value.trim();
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^\+380\d{9}$/;
        if (phoneRegex.test(phoneValue)) {
            phoneError.textContent = "";
            console.log("Phone is valid");
        } else {
            phoneError.textContent = "Please enter a valid phone number";
            console.log("Phone is invalid");
        }

        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (emailRegex.test(emailValue)) {
            emailError.textContent = "";
            console.log("Email is valid");
        } else {
            emailError.textContent = "Please enter a valid email";
        }

    });
});

