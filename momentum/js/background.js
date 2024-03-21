const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bigImage = document.createElement("img");
bigImage.src = `img/${chosenImage}`;

document.body.appendChild(bigImage);