


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
const catalogoLeftArrow2 = document.querySelector('.catalogo-left-arrow-2');
const catalogoRightArrow2 = document.querySelector('.catalogo-right-arrow-2');

let changeImageValue;
let changeImageValue2;
let itemMainImg;
let itemMainImg2;
let currentArray = [];
let currentArray2 = [];
let imgIndex = 0;


const bercoImgs =
  [
    'images/berco/berco1.png',
    'images/berco/berco2.png',
    'images/berco/berco3.png',
    'images/berco/berco4.png',
  ]
const berco2Imgs =
  [
    'images/berco/rolo1.png',
    'images/berco/rolo2.png'
  ]
const organizadoresImgs =
  [
    'images/organizadores/organizador1.png',
    'images/organizadores/organizador2.png',
    'images/organizadores/organizador3.png',
    'images/organizadores/organizador4.png',
    'images/organizadores/portafraldas.png'
  ]
const trocadoresImgs =
  [
    'images/trocadores/trocador1.png',
    'images/trocadores/trocador2.png',
    'images/trocadores/trocador3.png',
    'images/trocadores/trocador4.png',
    'images/trocadores/trocador5.png',
    'images/trocadores/trocador6.png',
  ]
const trocadores2Imgs =
  [
    'images/trocadores/trocadorportatil1.png',
    'images/trocadores/trocadorportatil2.png',
    'images/trocadores/trocadorportatil3.png',
    'images/trocadores/trocadorportatil4.png',
    'images/trocadores/trocadorportatil5.png',
    'images/trocadores/trocadorportatil6.png',
    'images/trocadores/trocadorportatil7.png',
    'images/trocadores/trocadorportatil8.png',
    'images/trocadores/trocadorportatil9.png',
    'images/trocadores/trocadorportatil10.png',
  ]
const ninhoImgs =
  [
    'images/ninho/ninho1.png',
    'images/ninho/ninho2.png',
    'images/ninho/ninho3.png',
    'images/ninho/ninho4.png',
    'images/ninho/ninho5.png',
    'images/ninho/ninho6.png',
    'images/ninho/ninho7.png'
  ]
const calcinhasImgs =
  [
    'images/calcinhas/calcinha1.png',
    'images/calcinhas/calcinha2.png',
    'images/calcinhas/calcinha3.png',
    'images/calcinhas/calcinha4.png',
    'images/calcinhas/calcinha5.png',
    'images/calcinhas/calcinha6.png',
    'images/calcinhas/calcinha7.png',
  ]
const almofadasImgs =
  [
    'images/almofadas/almofada1.png',
    'images/almofadas/almofada2.png',
    'images/almofadas/almofada3.png',
    'images/almofadas/almofada4.png',
    'images/almofadas/almofada5.png',
    'images/almofadas/almofada6.png',
    'images/almofadas/almofada7.png'
  ]
const almofadas2Imgs =
  [
    'images/almofadas/almofadaamamenta1.png',
    'images/almofadas/almofadaamamenta2.png',
    'images/almofadas/almofadaamamenta3.png',
    'images/almofadas/almofadaamamenta4.png',
    'images/almofadas/almofadaamamenta5.png'
  ]
const lembrancinhasImgs =
  [
    'images/lembrancinhas/lembrancinha1.png',
    'images/lembrancinhas/lembrancinha2.png',
    'images/lembrancinhas/lembrancinha3.png',
    'images/lembrancinhas/lembrancinha4.png',
    'images/lembrancinhas/lembrancinha5.png',
  ]
const bastidoresImgs =
  [
    'images/bastidores/bastidor1.png',
    'images/bastidores/bastidor2.png',
    'images/bastidores/bastidor3.png',
    'images/bastidores/bastidor4.png',
    'images/bastidores/bastidor5.png',
    'images/bastidores/bastidor6.png'
  ]
const capamaquinaImgs =
  [
    'images/capamaquina/capamaquina1.png',
    'images/capamaquina/capamaquina2.png',
    'images/capamaquina/capamaquina3.png',
    'images/capamaquina/capamaquina4.png',
    'images/capamaquina/capamaquina5.png',
    'images/capamaquina/capamaquina6.png',
    'images/capamaquina/capamaquina7.png',
    'images/capamaquina/capamaquina8.png',
    'images/capamaquina/capamaquina9.png',
  ]

const imgArrays = {
  berco: bercoImgs,
  berco2: berco2Imgs,
  trocadores: trocadoresImgs,
  trocadores2: trocadores2Imgs,
  ninho: ninhoImgs,
  organizadores: organizadoresImgs,
  calcinhas: calcinhasImgs,
  almofadas: almofadasImgs,
  almofadas2: almofadas2Imgs,
  lembrancinhas: lembrancinhasImgs,
  bastidores: bastidoresImgs,
  capamaquina: capamaquinaImgs
};



// ========== HOME - CAROUSEL ==========
const homeLeftArrow = document.getElementById('home-left-arrow');
const homeRightArrow = document.getElementById('home-right-arrow');
const homeCarousel = document.getElementById('home-carousel-div-js');
const homeInnerCarousel = document.getElementById('carousel-home');
const homeCarouselImgs = Array.from(homeInnerCarousel.children);

homeCarouselImgs.forEach(img => {
  const duplicatedImg = img.cloneNode(true);
  homeInnerCarousel.appendChild(duplicatedImg);
  homeInnerCarousel.style.animation = "move 100s linear infinite";
})
// ========== HOME - CAROUSEL ==========



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
  link.addEventListener('click', (event) => {
    event.preventDefault();
    selectCatalogoItem(link);
    changeImageCarousel();
    secondCarousel();
  });
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

  changeImageValue2 = hrefNew.replace("-item", "2");
  itemMainImg2 = document.getElementById(`catalogo-img-${changeImageValue}2`);
  currentArray2 = imgArrays[changeImageValue2];

  console.log('changeImageValue:', changeImageValue);
  console.log('currentArray:', currentArray);
  console.log('itemMainImg:', itemMainImg);

  console.log('changeImageValue2:', changeImageValue2);
  console.log('currentArray2:', currentArray2);
  console.log('itemMainImg2:', itemMainImg2);
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


function secondCarousel() {
  if (currentArray2 && itemMainImg2) {
    itemMainImg2.setAttribute("src", currentArray2[imgIndex]);
  }
}

function nextImage2() {
  if (imgIndex < currentArray2.length - 1) {
    imgIndex++;
    secondCarousel();
  } else if (imgIndex == currentArray2.length - 1) {
    imgIndex = 0;
    secondCarousel();
  }
}

function prevImage2() {
  if (imgIndex > 0) {
    imgIndex--;
    secondCarousel();
  } else if (imgIndex == 0) {
    imgIndex = currentArray2.length - 1;
    secondCarousel();
  }
}
// ========== CHANGE IMAGES - CATALOGO ITEM SECTIONS ========== //



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