// JavaScript
const imageContainer = document.querySelector(".image");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const threshold = 400; // Adjust this value as needed

    if (scrollY > threshold) {
        imageContainer.style.opacity = 1;
        imageContainer.style.transform = "rotateY(0deg)";
    } else {
        imageContainer.style.opacity = 0.5;
        // imageContainer.style.transform= "transform 0.1s ease"
        imageContainer.style.transform = "perspective(1000px) rotateX(35deg)";
    }
});






// script.js
document.addEventListener("DOMContentLoaded", function () {
    var openVideoLink = document.getElementById("openVideo");
    var videoModal = document.getElementById("videoModal");
    var closeVideoModal = document.getElementById("closeVideoModal");

    // Open the modal when the link is clicked
    openVideoLink.addEventListener("click", function (e) {
        e.preventDefault();
        videoModal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    closeVideoModal.addEventListener("click", function () {
        videoModal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function (e) {
        if (e.target == videoModal) {
            videoModal.style.display = "none";
        }
    });
});







document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and the content divs
    var contentButtons = document.querySelectorAll(".contentButton");
    var bigContents = document.querySelectorAll(".bigContent");

    // Show the first big content div by default
    bigContents[0].style.display = "block";

    // Add click event handlers to each button
    contentButtons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            // Hide all big content divs
            bigContents.forEach(function (content) {
                content.style.display = "none";
            });

            // Show the corresponding big content div
            bigContents[index].style.display = "block";
        });
    });
}); 


bigContents[0].style.display = "block";






