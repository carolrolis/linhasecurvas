


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
let changeImageValue3;
let itemMainImg;
let itemMainImg2;
let itemMainImg3;
let currentArray = [];
let currentArray2 = [];
let currentArray3 = [];

const imgIndex = {
  berco: 0,
  berco2: 0,
  bolsas: 0,
  bolsas2: 0,
  bolsas3: 0,
  toalhas: 0,
  toalhas2: 0,
  toalhas3: 0,
  portadocumentos: 0,
  organizadores: 0,
  trocadores: 0,
  trocadores2: 0,
  ninho: 0,
  calcinhas: 0,
  almofadas: 0,
  almofadas2: 0,
  bonecas: 0,
  bonecas2: 0,
  lembrancinhas: 0,
  bastidores: 0,
  capamaquina: 0
}


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
const bolsasImgs =
  [
    'images/bolsas/bolsa1.png',
    'images/bolsas/bolsa2.png',
    'images/bolsas/bolsa3.png',
    'images/bolsas/bolsa4.png',
    'images/bolsas/bolsa5.png',
    'images/bolsas/bolsa6.png',
  ]
const bolsas2Imgs =
  [
    'images/bolsas/necessaire1.png',
    'images/bolsas/necessaire2.png',
    'images/bolsas/necessaire3.png',
    'images/bolsas/necessaire4.png',
    'images/bolsas/necessaire5.png',
    'images/bolsas/necessaire6.png',
    'images/bolsas/necessaire7.png',
    'images/bolsas/necessaire8.png',
    'images/bolsas/necessaire9.png',
    'images/bolsas/necessaire10.png',
  ]
const bolsas3Imgs =
  [
    'images/bolsas/farmacinha1.png',
    'images/bolsas/farmacinha2.png',
    'images/bolsas/farmacinha3.png',
    'images/bolsas/farmacinha4.png',
    'images/bolsas/farmacinha5.png',
    'images/bolsas/farmacinha6.png',
    'images/bolsas/farmacinha7.png',
    'images/bolsas/farmacinha8.png',
    'images/bolsas/farmacinha9.png',
  ]
const toalhasImgs =
  [
    'images/toalhas/toalha1.png',
    'images/toalhas/toalha2.png',
    'images/toalhas/toalha3.png',
    'images/toalhas/toalha4.png',
    'images/toalhas/toalha5.png',
    'images/toalhas/toalha6.png',
    'images/toalhas/toalha7.png',
    'images/toalhas/toalha8.png',
    'images/toalhas/toalha9.png',
    'images/toalhas/toalha10.png',
    'images/toalhas/toalha11.png',
    'images/toalhas/toalha12.png',
    'images/toalhas/toalha13.png'
  ]
const toalhas2Imgs =
  [
    'images/toalhas/roupao1.png',
    'images/toalhas/roupao2.png',
    'images/toalhas/roupao3.png',
    'images/toalhas/roupao4.png',
    'images/toalhas/roupao5.png',
    'images/toalhas/roupao6.png',
    'images/toalhas/roupao7.png'
  ]
const toalhas3Imgs =
  [
    'images/toalhas/toalhaadulto1.png',
    'images/toalhas/toalhaadulto2.png',
    'images/toalhas/toalhaadulto3.png',
    'images/toalhas/toalhaadulto4.png',
    'images/toalhas/toalhaadulto5.png',
    'images/toalhas/toalhaadulto6.png',
  ]
const portadocumentosImgs =
  [
    'images/portadocumentos/porta1.png',
    'images/portadocumentos/porta2.png',
    'images/portadocumentos/porta3.png',
    'images/portadocumentos/porta4.png',
    'images/portadocumentos/porta5.png',
    'images/portadocumentos/porta6.png',
    'images/portadocumentos/porta7.png',
    'images/portadocumentos/porta8.png',
    'images/portadocumentos/porta9.png',
    'images/portadocumentos/porta10.png',
    'images/portadocumentos/porta11.png',
    'images/portadocumentos/porta12.png',
    'images/portadocumentos/porta13.png',
    'images/portadocumentos/porta14.png',
    'images/portadocumentos/porta15.png',
    'images/portadocumentos/porta16.png',
    'images/portadocumentos/porta17.png',
    'images/portadocumentos/porta18.png',
    'images/portadocumentos/porta19.png',
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
const bonecasImgs =
  [
    'images/bonecas/boneca1.png',
    'images/bonecas/boneca2.png',
    'images/bonecas/boneca3.png',
    'images/bonecas/boneca4.png',
    'images/bonecas/boneca5.png',
    'images/bonecas/boneca6.png',
    'images/bonecas/boneca7.png',
    'images/bonecas/boneca8.png',
    'images/bonecas/boneca9.png'
  ]
const bonecas2Imgs =
  [
    'images/bonecas/naninha1.png',
    'images/bonecas/naninha2.png',
    'images/bonecas/naninha3.png',
    'images/bonecas/naninha4.png'
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
  bolsas: bolsasImgs,
  bolsas2: bolsas2Imgs,
  bolsas3: bolsas3Imgs,
  toalhas: toalhasImgs,
  toalhas2: toalhas2Imgs,
  toalhas3: toalhas3Imgs,
  trocadores: trocadoresImgs,
  trocadores2: trocadores2Imgs,
  ninho: ninhoImgs,
  portadocumentos: portadocumentosImgs,
  organizadores: organizadoresImgs,
  calcinhas: calcinhasImgs,
  almofadas: almofadasImgs,
  almofadas2: almofadas2Imgs,
  bonecas: bonecasImgs,
  bonecas2: bonecas2Imgs,
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
    thirdCarousel();
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

  changeImageValue3 = hrefNew.replace("-item", "3");
  itemMainImg3 = document.getElementById(`catalogo-img-${changeImageValue}3`);
  currentArray3 = imgArrays[changeImageValue3];

  console.log('changeImageValue:', changeImageValue);
  console.log('currentArray:', currentArray);
  console.log('itemMainImg:', itemMainImg);

  console.log('changeImageValue2:', changeImageValue2);
  console.log('currentArray2:', currentArray2);
  console.log('itemMainImg2:', itemMainImg2);

  console.log('changeImageValue3:', changeImageValue3);
  console.log('currentArray3:', currentArray3);
  console.log('itemMainImg3:', itemMainImg3);
}
// ========== CHANGE PAGES - CATALOGO ITEM SECTIONS ========== //



// ========== CHANGE IMAGES - CATALOGO ITEM SECTIONS ========== //
function changeImageCarousel() {
  if (currentArray && itemMainImg) {
    itemMainImg.setAttribute("src", currentArray[imgIndex[changeImageValue]]);
  }
}

function nextImage() {
  if (imgIndex[changeImageValue] < currentArray.length - 1) {
    imgIndex[changeImageValue]++;
    changeImageCarousel();
  } else if (imgIndex[changeImageValue] == currentArray.length - 1) {
    imgIndex[changeImageValue] = 0;
    changeImageCarousel();
  }
}

function prevImage() {
  if (imgIndex[changeImageValue] > 0) {
    imgIndex[changeImageValue]--;
    changeImageCarousel();
  } else if (imgIndex[changeImageValue] == 0) {
    imgIndex[changeImageValue] = currentArray.length - 1;
    changeImageCarousel();
  }
}


function secondCarousel() {
  if (currentArray2 && itemMainImg2) {
    itemMainImg2.setAttribute("src", currentArray2[imgIndex[changeImageValue2]]);
  }
}

function nextImage2() {
  if (imgIndex[changeImageValue2] < currentArray2.length - 1) {
    imgIndex[changeImageValue2]++;
    secondCarousel();
  } else if (imgIndex[changeImageValue2] == currentArray2.length - 1) {
    imgIndex[changeImageValue2] = 0;
    secondCarousel();
  }
}

function prevImage2() {
  if (imgIndex[changeImageValue2] > 0) {
    imgIndex[changeImageValue2]--;
    secondCarousel();
  } else if (imgIndex[changeImageValue2] == 0) {
    imgIndex[changeImageValue2] = currentArray2.length - 1;
    secondCarousel();
  }
}


function thirdCarousel() {
  if (currentArray3 && itemMainImg3) {
    itemMainImg3.setAttribute("src", currentArray3[imgIndex[changeImageValue3]]);
  }
}

function nextImage3() {
  if (imgIndex[changeImageValue3] < currentArray3.length - 1) {
    imgIndex[changeImageValue3]++;
    thirdCarousel();
  } else if (imgIndex[changeImageValue3] == currentArray3.length - 1) {
    imgIndex[changeImageValue3] = 0;
    thirdCarousel();
  }
}

function prevImage3() {
  if (imgIndex[changeImageValue3] > 0) {
    imgIndex[changeImageValue3]--;
    thirdCarousel();
  } else if (imgIndex[changeImageValue3] == 0) {
    imgIndex[changeImageValue3] = currentArray3.length - 1;
    thirdCarousel();
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