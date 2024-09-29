//Carousel
const carousel = document.getElementById('carousel-div-js');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
let scrollInterval;

function startScrolling(direction) {
  scrollInterval = setInterval(() => {carousel.scrollLeft += direction * 500;}, 800);
  leftArrow.style.display = 'block';
}

function stopScrolling() {
  clearInterval(scrollInterval);
}

leftArrow.addEventListener('mouseover', () => startScrolling(-1));
rightArrow.addEventListener('mouseover', () => startScrolling(1));
leftArrow.addEventListener('mouseout', stopScrolling);
rightArrow.addEventListener('mouseout', stopScrolling);



//Scroll to Top Button
let button = document.getElementById("scroll-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Disable right-click
//document.addEventListener('contextmenu', event => {
//event.preventDefault();
//});