const carousel = document.getElementById('carousel-div-js');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const homePage = document.getElementById('home');
const catalogoPage = document.getElementById('catalogo');
const sobrePage = document.getElementById('sobre');
const homeLink = document.querySelector('a[href="#home"]');
const catalogoLink = document.querySelector('a[href="#catalogo"]');
const sobreLink = document.querySelector('a[href="#sobre"]');

const homeSquare = document.getElementById('square-home');
const catalogoSquare = document.getElementById('square-catalogo');
const sobreSquare = document.getElementById('square-sobre');

let scrollInterval;


// CAROUSEL //
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
// CAROUSEL //


// Scroll to Top Button //
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
// Scroll to Top Button //


// CHANGE PAGES //
  homeLink.addEventListener("click", function(event) {
    event.preventDefault();

    catalogoPage.style.display = "none";
    sobrePage.style.display = "none";
    homePage.style.display = "block";

    catalogoSquare.style.display = "none";
    sobreSquare.style.display = "none";
    homeSquare.style.display = "inline";
  })

  catalogoLink.addEventListener("click", function(event) {
    event.preventDefault();

    homePage.style.display = "none";
    sobrePage.style.display = "none";
    catalogoPage.style.display = "block";

    homeSquare.style.display = "none";
    sobreSquare.style.display = "none";
    catalogoSquare.style.display = "inline";
  })

  sobreLink.addEventListener("click", function(event) {
    event.preventDefault();

    homePage.style.display = "none";
    catalogoPage.style.display = "none";
    sobrePage.style.display = "block";

    homeSquare.style.display = "none";
    catalogoSquare.style.display = "none";
    sobreSquare.style.display = "inline";
  })
// CHANGE PAGES //