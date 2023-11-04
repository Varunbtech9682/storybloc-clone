// Get all buttons with the class "color-button"
const buttonscon = document.querySelectorAll('.contentButton');

// Add click event listeners to each button
buttonscon.forEach(button => {
  button.addEventListener('click', () => {
    // Remove the "active" class from all buttons
    buttonscon.forEach(btn => btn.classList.remove('active'));
    
    // Add the "active" class to the clicked button
    button.classList.add('active');
  });
});




document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let slideIndex = 0;

  prevButton.addEventListener("click", function () {
      slideIndex = Math.max(slideIndex - 1, 0);
      updateSlider();
  });

  nextButton.addEventListener("click", function () {
      slideIndex = Math.min(slideIndex + 1, sliderContainer.children.length - 1);
      updateSlider();
  });

  function updateSlider() {
      const slideWidth = sliderContainer.children[0].offsetWidth;
      const offset = -slideIndex * slideWidth;
      sliderContainer.style.transform = `translateX(${offset}px)`;
  }
});
