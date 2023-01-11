/* Need to give interactivity to carousel slider 
buttons to display the next image and hide all the rest*/

/*Select all slides*/
const slides = document.querySelectorAll(".slide");

/*Loop through the slides and set each slide's translateX property to index *  */ 

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

/* Slides will need a counter to track current slide */

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

//   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

/* select previous slide button */

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
  if(curSlide === 0){
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
  })
});

