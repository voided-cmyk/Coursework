$(document).ready(function () {

  console.log("Document has been loaded");


const greeter = document.getElementById("greeter");

/* add more images later please */
const images = [
    "Images/Gym.jpg",
    "Images/general-img-square.png"
];

let currentImageIndex = 0;

function changeBackground() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // image loop
    greeter.style.backgroundImage = `url(${images[currentImageIndex]})`; // change image background
}

setInterval(changeBackground, 5000); // change every 5 seconds (may change this later)

});
