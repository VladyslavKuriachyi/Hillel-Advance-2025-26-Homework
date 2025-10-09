const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

let currentIndex = 0;

const dotsContainer = document.createElement('div');
dotsContainer.classList.add('dots');
document.body.appendChild(dotsContainer);

slideElements.forEach((_, index)=> {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
});
function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = currentIndex === slideElements.length - 1 ? 'none' : 'block';

    const dots = document.querySelectorAll('.dot');
    dots.forEach( dot =>dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}
prevBtn.textContent = 'Prev';
nextBtn.textContent = 'Next';

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});
nextBtn.addEventListener('click', () => {
    if(currentIndex < slideElements.length - 1) {
        currentIndex++;
        updateSlider();
    }
});
updateSlider();
