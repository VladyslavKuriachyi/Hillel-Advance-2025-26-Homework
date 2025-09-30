const textElement = document.getElementById('changeColor')
const colorBtn = document.getElementById('colorBtn')

let currentColor = 'darkblue'

colorBtn.addEventListener('click', () => {
    if (currentColor === 'darkblue') {
        textElement.style.color = 'black';
        currentColor = 'black';
    } else if (currentColor === 'black') {
        textElement.style.color = 'red';
        currentColor = 'red';
    } else {
        textElement.style.color = 'darkblue';
        currentColor = 'darkblue';
    }
})