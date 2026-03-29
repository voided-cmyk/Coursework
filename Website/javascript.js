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
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
    greeter.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

setInterval(changeBackground, 5000); // Change background every 5 seconds

});