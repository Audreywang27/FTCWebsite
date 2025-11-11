// Object to store slideIndex for each slideshow
let slideIndexes = {};

function plusSlides(n, slideshowId) {
  console.log("plusSlides called:", n, slideshowId); // ADD THIS
  
  if (!slideIndexes[slideshowId]) {
    slideIndexes[slideshowId] = 1;
  }
  
  console.log("Before:", slideIndexes[slideshowId]); // ADD THIS
  slideIndexes[slideshowId] += n;
  console.log("After:", slideIndexes[slideshowId]); // ADD THIS
  
  showSlides(slideshowId);
}

function showSlides(slideshowId) {
  let slides = document.querySelectorAll(`#${slideshowId} .mySlides-gallery`);
  
  if (slides.length === 0) return;
  
  // Handle wrapping
  if (slideIndexes[slideshowId] > slides.length) {
    slideIndexes[slideshowId] = 1;
  }else if (slideIndexes[slideshowId] < 1) {
    slideIndexes[slideshowId] = slides.length;
  }

  // Hide all slides in this slideshow
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show current slide
  slides[slideIndexes[slideshowId] - 1].style.display = "block";
}