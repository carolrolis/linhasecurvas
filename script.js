let scrollInterval;
const homeCarousel = document.getElementById('home-carousel-div-js');
const homeLeftArrow = document.getElementById('home-left-arrow');
const homeRightArrow = document.getElementById('home-right-arrow');


let button = document.getElementById("scroll-top");


const homePage = document.getElementById('home');
const catalogoPage = document.getElementById('catalogo');
const catalogoIntroPage = document.getElementById('catalogo-intro');
const sobrePage = document.getElementById('sobre');

const welcomeButton = document.getElementById('welcome-button');
const backButtonCatalogo = document.getElementById('back-button-catalogo');

const homeLink = document.querySelector('a[href="#home"]');
const catalogoLink = document.querySelector('a[href="#catalogo"]');
const sobreLink = document.querySelector('a[href="#sobre"]');
const homeSquare = document.getElementById('nav-square-home');
const catalogoSquare = document.getElementById('nav-square-catalogo');
const sobreSquare = document.getElementById('nav-square-sobre');


// Variáveis DOM - NodeList de todos os elementos HTML <a href="...-item"> e <section id="...-item">
const itemsLinks = document.querySelectorAll('a[href$="-item"]');
const itemsSections = document.querySelectorAll('section[id$="-item"]');


const catalogoLeftArrow = document.querySelector('.catalogo-left-arrow');
const catalogoRightArrow = document.querySelector('.catalogo-right-arrow');

let changeImageValue;
let itemMainImg;

const farmacinhaImgs =
  [
    'images/farmacinha/farmacinha1.jpg',
    'images/farmacinha/farmacinha2.jpg',
    'images/farmacinha/farmacinha3.jpg',
    'images/farmacinha/farmacinha4.jpg',
    'images/farmacinha/farmacinha5.jpg',
    'images/farmacinha/farmacinha6.jpg',
    'images/farmacinha/farmacinha7.jpg',
    'images/farmacinha/farmacinha8.jpg',
    'images/farmacinha/farmacinha9.jpg'
  ]
const organizadoresImgs =
  [
    'images/organizadores/organizador1.jpg',
    'images/organizadores/organizador2.jpg',
    'images/organizadores/organizador3.jpg',
    'images/organizadores/organizador4.jpg'
  ]
const ninhosImgs =
[
  'images/ninhos/ninho1.jpg',
  'images/ninhos/ninho2.jpg',
  'images/ninhos/ninho3.jpg',
  'images/ninhos/ninho4.jpg',
  'images/ninhos/ninho5.jpg',
  'images/ninhos/ninho6.jpg',
  'images/ninhos/ninho7.jpg'
]

const imgArrays = {
  farmacinha: farmacinhaImgs,
  organizadores: organizadoresImgs,
  ninhos: ninhosImgs
};
let currentArray = [];
let imgIndex = 0;



// ========== HOME - CAROUSEL ==========
homeLeftArrow.addEventListener('mouseover', () => startScrolling(-1));
homeRightArrow.addEventListener('mouseover', () => startScrolling(1));
homeLeftArrow.addEventListener('mouseout', stopScrolling);
homeRightArrow.addEventListener('mouseout', stopScrolling);

function startScrolling(direction) {
  scrollInterval = setInterval(() => { homeCarousel.scrollLeft += direction * 500; }, 800);
  homeLeftArrow.style.display = "block";
}

function stopScrolling() {
  clearInterval(scrollInterval);
}
// ========== HOME - CAROUSEL ==========



// ========== SCROLL TO TOP BUTTON ==========
window.onscroll = function () { scrollFunction() };

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
// ========== SCROLL TO TOP BUTTON ==========



// ========== CHANGE PAGES - NAVBAR, WELCOME BUTTON AND BACKBUTTON CATALOGO ==========
homeLink.addEventListener('click', () => homeDisplay());
catalogoLink.addEventListener('click', () => catalogoDisplay());
welcomeButton.addEventListener('click', () => catalogoDisplay());
backButtonCatalogo.addEventListener('click', () => backToCatalogo());
sobreLink.addEventListener('click', () => sobreDisplay());


function homeDisplay() {
  topFunction();
  catalogoPage.style.display = "none";
  sobrePage.style.display = "none";
  homePage.style.display = "block";

  catalogoSquare.style.display = "none";
  sobreSquare.style.display = "none";
  homeSquare.style.display = "inline";
}

function catalogoDisplay() {
  topFunction();
  homePage.style.display = "none";
  sobrePage.style.display = "none";
  catalogoPage.style.display = "block";

  homeSquare.style.display = "none";
  sobreSquare.style.display = "none";
  catalogoSquare.style.display = "inline";

  catalogoIntroPage.style.display = "block";
  backButtonCatalogo.style.display = "none";
  itemsSections.forEach(section => {
    section.style.display = "none";
  })
}

function backToCatalogo() {
  topFunction();
  catalogoIntroPage.style.display = "block";
  backButtonCatalogo.style.display = "none";
  itemsSections.forEach(section => {
    section.style.display = "none";
  })
}

function sobreDisplay() {
  topFunction();
  catalogoPage.style.display = "none";
  homePage.style.display = "none";
  sobrePage.style.display = "block";

  catalogoSquare.style.display = "none";
  homeSquare.style.display = "none";
  sobreSquare.style.display = "inline";
}
// ========== CHANGE PAGES - NAVBAR, WELCOME BUTTON AND BACKBUTTON CATALOGO ==========



// ========== CHANGE PAGES - CATALOGO ITEM SECTIONS ==========
itemsLinks.forEach(link => {
  link.addEventListener('click', () => selectCatalogoItem(link));
  changeImageCarousel();
});


function selectCatalogoItem(link) {
  topFunction();

  let hrefValue = link.getAttribute('href');
  let hrefNew = hrefValue.replace('#', '');
  const selectedItem = document.getElementById(`${hrefNew}`);

  catalogoIntroPage.style.display = "none";
  selectedItem.style.display = "block";
  backButtonCatalogo.style.display = "block";

  itemsSections.forEach(section => {
    if (section !== selectedItem) {
      section.style.display = "none";
    }
  });

  changeImageValue = hrefNew.replace("-item", "");
  itemMainImg = document.getElementById(`catalogo-img-${changeImageValue}`);
  currentArray = imgArrays[changeImageValue];
}
// ========== CHANGE PAGES - CATALOGO ITEM SECTIONS ========== //



// ========== CHANGE IMAGES - CATALOGO ITEM SECTIONS ========== //
function changeImageCarousel() {
  if (currentArray && itemMainImg) {
    itemMainImg.setAttribute("src", currentArray[imgIndex]);
  }
}

function nextImage() {
  if (imgIndex < currentArray.length - 1) {
    imgIndex++;
    changeImageCarousel();
  } else if (imgIndex == currentArray.length - 1) {
    imgIndex = 0;
    changeImageCarousel();
  }
}

function prevImage() {
  if (imgIndex > 0) {
    imgIndex--;
    changeImageCarousel();
  } else if (imgIndex == 0) {
    imgIndex = currentArray.length - 1;
    changeImageCarousel();
  }
}
// ========== CHANGE IMAGES - CATALOGO ITEM SECTIONS ========== //