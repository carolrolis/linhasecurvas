// Variáveis DOM do carrossel da Home Page
const carousel = document.getElementById('carousel-div-js-home');
const leftArrow = document.getElementById('left-arrow-home');
const rightArrow = document.getElementById('right-arrow-home');

// Variável referente ao intervalo do carrossel de imagens
let scrollInterval;

// Variável DOM do botão de voltar para cima
let button = document.getElementById("scroll-top");

// Variáveis referentes à mudança de páginas através da navbar, do botão principal e do botão de voltar nos itens do catálogo
const homePage = document.getElementById('home');
const catalogoPage = document.getElementById('catalogo');
const catalogoIntroPage = document.getElementById('catalogo-intro');
const sobrePage = document.getElementById('sobre');
const welcomeButton = document.getElementById('welcome-button');
const backButton = document.getElementById('voltar-catalogo');
const homeLink = document.querySelector('a[href="#home"]');
const catalogoLink = document.querySelector('a[href="#catalogo"]');
const sobreLink = document.querySelector('a[href="#sobre"]');
const homeSquare = document.getElementById('square-home');
const catalogoSquare = document.getElementById('square-catalogo');
const sobreSquare = document.getElementById('square-sobre');

// Variáveis DOM - NodeList de todos os elementos HTML <a href="...-item"> e <section id="...-item">
const itemsLinks = document.querySelectorAll('a[href$="-item"]');
const itemsSections = document.querySelectorAll('section[id$="-item"]');



// HOME - CAROUSEL //
function startScrolling(direction) {
  scrollInterval = setInterval(() => { carousel.scrollLeft += direction * 500; }, 800);
  leftArrow.style.display = "block";
}

function stopScrolling() {
  clearInterval(scrollInterval);
}

leftArrow.addEventListener('mouseover', () => startScrolling(-1));
rightArrow.addEventListener('mouseover', () => startScrolling(1));
leftArrow.addEventListener('mouseout', stopScrolling);
rightArrow.addEventListener('mouseout', stopScrolling);
// HOME - CAROUSEL //



// SCROLL TO TOP BUTTON //
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
// SCROLL TO TOP BUTTON //



// CHANGE PAGES - NAVBAR AND MAIN BUTTON //
homeLink.addEventListener("click", () => homeDisplay());
catalogoLink.addEventListener("click", () => catalogoDisplay());
welcomeButton.addEventListener("click", () => catalogoDisplay());
sobreLink.addEventListener("click", () => sobreDisplay());

function homeDisplay() {
  catalogoPage.style.display = "none";
  sobrePage.style.display = "none";
  homePage.style.display = "block";

  catalogoSquare.style.display = "none";
  sobreSquare.style.display = "none";
  homeSquare.style.display = "inline";
}

function catalogoDisplay() {
  homePage.style.display = "none";
  sobrePage.style.display = "none";
  catalogoPage.style.display = "block";

  homeSquare.style.display = "none";
  sobreSquare.style.display = "none";
  catalogoSquare.style.display = "inline";

  catalogoIntroPage.style.display = "block";
  backButton.style.display = "none";
  itemsSections.forEach(section => {
    section.style.display = "none";
  })
}

function sobreDisplay() {
  catalogoPage.style.display = "none";
  homePage.style.display = "none";
  sobrePage.style.display = "block";

  catalogoSquare.style.display = "none";
  homeSquare.style.display = "none";
  sobreSquare.style.display = "inline";
}
// CHANGE PAGES - NAVBAR AND BUTTON //



// CHANGE PAGES - CATALOGO SECTIONS //
itemsLinks.forEach(link => {
  link.addEventListener('click', () => selectCatalogoItem(link));
  console.log(link);
});

function selectCatalogoItem(link) {
  topFunction();

  let hrefValue = link.getAttribute('href');
  let hrefNew = hrefValue.replace('#', '');
  const selectedItem = document.getElementById(`${hrefNew}`);

  catalogoIntroPage.style.display = "none";
  selectedItem.style.display = "block";
  backButton.style.display = "block";

  itemsSections.forEach(section => {
    if (section !== selectedItem) {
      section.style.display = "none";
    }
  });
}

backButton.addEventListener("click", () => backToCatalogo());

function backToCatalogo() {
  topFunction();
  catalogoIntroPage.style.display = "block";
  backButton.style.display = "none";
  itemsSections.forEach(section => {
    section.style.display = "none";
  })
}
// CHANGE PAGES - CATALOGO SECTIONS //