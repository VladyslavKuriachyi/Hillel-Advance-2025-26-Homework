const imageFiles =['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

const imgElement = document.getElementById('randomImage');

const randomImage = Math.floor(Math.random() * imageFiles.length);

const randomImageUrl = imageFiles[randomImage];

imgElement.src = randomImageUrl;