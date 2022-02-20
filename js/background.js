const images = [ "0.jpg", "1.jpg", "2.jpg" ];

const chosenImage = images[Math.floor(Math.random() * images.length)];


const bgImage = document.createElement("img");
const bgColor = document.createElement("div");
bgColor.classList.add("bgColor")


bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
document.body.appendChild(bgColor);