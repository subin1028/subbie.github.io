const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];


const bigImage = document.createElement("img");
bigImage.src = `img/${chosenImage}`;
bigImage.classList.add("background");
document.body.appendChild(bigImage);