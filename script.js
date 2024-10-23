


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
let changeImageValue4;
let changeImageValue5;
let changeImageValue6;
let changeImageValue7;

let itemMainImg;
let itemMainImg2;
let itemMainImg3;
let itemMainImg4;
let itemMainImg5;
let itemMainImg6;
let itemMainImg7;

let currentArray = [];
let currentArray2 = [];
let currentArray3 = [];
let currentArray4 = [];
let currentArray5 = [];
let currentArray6 = [];
let currentArray7 = [];

const imgIndex = {
  berco: 0,
  berco2: 0,
  bolsas: 0,
  bolsas2: 0,
  bolsas3: 0,
  fraldas: 0,
  toalhas: 0,
  toalhas2: 0,
  toalhas3: 0,
  kitmaternidade: 0,
  portadocumentos: 0,
  organizadores: 0,
  trocadores: 0,
  trocadores2: 0,
  ninho: 0,
  calcinhas: 0,
  kitbatismo: 0,
  almofadas: 0,
  almofadas2: 0,
  bonecas: 0,
  bonecas2: 0,
  lembrancinhas: 0,
  bastidores: 0,
  capamaquina: 0,
  lar: 0,
  lar2: 0,
  lar3: 0,
  lar4: 0,
  lar5: 0,
  lar6: 0,
  lar7: 0
}


const bercoImgs =
  [
    'images/berco/berco1.png',
    'images/berco/berco2.png',
    'images/berco/berco3.png',
    'images/berco/berco4.png'
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
    'images/bolsas/bolsa6.png'
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
    'images/bolsas/necessaire10.png'
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
    'images/bolsas/farmacinha9.png'
  ]
const fraldasImgs =
  [
    'images/fraldas/fralda1.png',
    'images/fraldas/fralda2.png',
    'images/fraldas/fralda3.png',
    'images/fraldas/fralda4.png',
    'images/fraldas/fralda5.png',
    'images/fraldas/fralda6.png',
    'images/fraldas/fralda7.png',
    'images/fraldas/fralda8.png',
    'images/fraldas/fralda9.png',
    'images/fraldas/fralda10.png',
    'images/fraldas/fralda11.png',
    'images/fraldas/fralda12.png',
    'images/fraldas/fralda13.png',
    'images/fraldas/fralda14.png',
    'images/fraldas/fralda15.png'
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
    'images/toalhas/toalhaadulto6.png'
  ]
const kitmaternidadeImgs =
  [
    'images/kitmaternidade/kitmaternidade1.png',
    'images/kitmaternidade/kitmaternidade2.png',
    'images/kitmaternidade/kitmaternidade3.png',
    'images/kitmaternidade/kitmaternidade4.png',
    'images/kitmaternidade/kitmaternidade5.png',
    'images/kitmaternidade/kitmaternidade6.png',
    'images/kitmaternidade/kitmaternidade7.png'
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
    'images/portadocumentos/porta19.png'
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
    'images/trocadores/trocador6.png'
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
    'images/trocadores/trocadorportatil10.png'
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
    'images/calcinhas/calcinha7.png'
  ]
const kitbatismoImgs =
  [
    'images/kitbatismo/kitbatismo1.png',
    'images/kitbatismo/kitbatismo2.png',
    'images/kitbatismo/kitbatismo3.png',
    'images/kitbatismo/kitbatismo4.png',
    'images/kitbatismo/kitbatismo5.png',
    'images/kitbatismo/kitbatismo6.png',
    'images/kitbatismo/kitbatismo7.png',
    'images/kitbatismo/kitbatismo8.png',
    'images/kitbatismo/kitbatismo9.png',
    'images/kitbatismo/kitbatismo10.png',
    'images/kitbatismo/kitbatismo11.png'
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
    'images/lembrancinhas/lembrancinha5.png'
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
    'images/capamaquina/capamaquina9.png'
  ]
const larImgs =
  [
    'images/lar/cozinha1.png',
    'images/lar/cozinha2.png',
    'images/lar/cozinha3.png',
    'images/lar/cozinha4.png',
    'images/lar/cozinha5.png',
    'images/lar/cozinha6.png',
    'images/lar/cozinha7.png',
    'images/lar/cozinha8.png',
    'images/lar/cozinha9.png',
    'images/lar/cozinha10.png',
    'images/lar/cozinha11.png',
    'images/lar/cozinha12.png',
    'images/lar/cozinha13.png',
    'images/lar/cozinha14.png',
    'images/lar/cozinha15.png'
  ]
const lar2Imgs =
  [
    'images/lar/pano1.png',
    'images/lar/pano2.png',
    'images/lar/pano3.png',
    'images/lar/pano4.png',
    'images/lar/pano5.png',
    'images/lar/pano6.png',
    'images/lar/pano7.png',
    'images/lar/pano8.png'
  ]
const lar3Imgs =
  [
    'images/lar/puxasaco1.png',
    'images/lar/puxasaco2.png',
    'images/lar/puxasaco3.png',
    'images/lar/puxasaco4.png',
    'images/lar/puxasaco5.png',
    'images/lar/puxasaco6.png',
    'images/lar/puxasaco7.png'
  ]
const lar4Imgs =
  [
    'images/lar/trilho1.png',
    'images/lar/trilho2.png',
    'images/lar/trilho3.png',
    'images/lar/trilho4.png'
  ]
const lar5Imgs =
  [
    'images/lar/kitlanche1.png',
    'images/lar/kitlanche2.png',
    'images/lar/kitlanche3.png',
    'images/lar/kitlanche4.png'
  ]
const lar6Imgs =
  [
    'images/lar/peso1.png',
    'images/lar/peso2.png',
    'images/lar/peso3.png',
    'images/lar/peso4.png'
  ]
const lar7Imgs =
  [
    'images/lar/avental1.png',
    'images/lar/avental2.png'
  ]
const imgArrays = {
  berco: bercoImgs,
  berco2: berco2Imgs,
  bolsas: bolsasImgs,
  bolsas2: bolsas2Imgs,
  bolsas3: bolsas3Imgs,
  fraldas: fraldasImgs,
  toalhas: toalhasImgs,
  toalhas2: toalhas2Imgs,
  toalhas3: toalhas3Imgs,
  kitmaternidade: kitmaternidadeImgs,
  trocadores: trocadoresImgs,
  trocadores2: trocadores2Imgs,
  ninho: ninhoImgs,
  portadocumentos: portadocumentosImgs,
  organizadores: organizadoresImgs,
  calcinhas: calcinhasImgs,
  kitbatismo: kitbatismoImgs,
  almofadas: almofadasImgs,
  almofadas2: almofadas2Imgs,
  bonecas: bonecasImgs,
  bonecas2: bonecas2Imgs,
  lembrancinhas: lembrancinhasImgs,
  bastidores: bastidoresImgs,
  capamaquina: capamaquinaImgs,
  lar: larImgs,
  lar2: lar2Imgs,
  lar3: lar3Imgs,
  lar4: lar4Imgs,
  lar5: lar5Imgs,
  lar6: lar6Imgs,
  lar7: lar7Imgs
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
    fourthCarousel();
    fifthCarousel();
    sixthCarousel();
    seventhCarousel();
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

  changeImageValue4 = hrefNew.replace("-item", "4");
  itemMainImg4 = document.getElementById(`catalogo-img-${changeImageValue}4`);
  currentArray4 = imgArrays[changeImageValue4];

  changeImageValue5 = hrefNew.replace("-item", "5");
  itemMainImg5 = document.getElementById(`catalogo-img-${changeImageValue}5`);
  currentArray5 = imgArrays[changeImageValue5];

  changeImageValue6 = hrefNew.replace("-item", "6");
  itemMainImg6 = document.getElementById(`catalogo-img-${changeImageValue}6`);
  currentArray6 = imgArrays[changeImageValue6];

  changeImageValue7 = hrefNew.replace("-item", "7");
  itemMainImg7 = document.getElementById(`catalogo-img-${changeImageValue}7`);
  currentArray7 = imgArrays[changeImageValue7];


  console.log('changeImageValue:', changeImageValue);
  console.log('currentArray:', currentArray);
  console.log('itemMainImg:', itemMainImg);
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


function fourthCarousel() {
  if (currentArray4 && itemMainImg4) {
    itemMainImg4.setAttribute("src", currentArray4[imgIndex[changeImageValue4]]);
  }
}

function nextImage4() {
  if (imgIndex[changeImageValue4] < currentArray4.length - 1) {
    imgIndex[changeImageValue4]++;
    fourthCarousel();
  } else if (imgIndex[changeImageValue4] == currentArray4.length - 1) {
    imgIndex[changeImageValue4] = 0;
    fourthCarousel();
  }
}

function prevImage4() {
  if (imgIndex[changeImageValue4] > 0) {
    imgIndex[changeImageValue4]--;
    fourthCarousel();
  } else if (imgIndex[changeImageValue4] == 0) {
    imgIndex[changeImageValue4] = currentArray4.length - 1;
    fourthCarousel();
  }
}

function fifthCarousel() {
  if (currentArray5 && itemMainImg5) {
    itemMainImg5.setAttribute("src", currentArray5[imgIndex[changeImageValue5]]);
  }
}

function nextImage5() {
  if (imgIndex[changeImageValue5] < currentArray5.length - 1) {
    imgIndex[changeImageValue5]++;
    fifthCarousel();
  } else if (imgIndex[changeImageValue5] == currentArray5.length - 1) {
    imgIndex[changeImageValue5] = 0;
    fifthCarousel();
  }
}

function prevImage5() {
  if (imgIndex[changeImageValue5] > 0) {
    imgIndex[changeImageValue5]--;
    fifthCarousel();
  } else if (imgIndex[changeImageValue5] == 0) {
    imgIndex[changeImageValue5] = currentArray5.length - 1;
    fifthCarousel();
  }
}


function sixthCarousel() {
  if (currentArray6 && itemMainImg6) {
    itemMainImg6.setAttribute("src", currentArray6[imgIndex[changeImageValue6]]);
  }
}

function nextImage6() {
  if (imgIndex[changeImageValue6] < currentArray6.length - 1) {
    imgIndex[changeImageValue6]++;
    sixthCarousel();
  } else if (imgIndex[changeImageValue6] == currentArray6.length - 1) {
    imgIndex[changeImageValue6] = 0;
    sixthCarousel();
  }
}

function prevImage6() {
  if (imgIndex[changeImageValue6] > 0) {
    imgIndex[changeImageValue6]--;
    sixthCarousel();
  } else if (imgIndex[changeImageValue6] == 0) {
    imgIndex[changeImageValue6] = currentArray6.length - 1;
    sixthCarousel();
  }
}


function seventhCarousel() {
  if (currentArray7 && itemMainImg7) {
    itemMainImg7.setAttribute("src", currentArray7[imgIndex[changeImageValue7]]);
  }
}

function nextImage7() {
  if (imgIndex[changeImageValue7] < currentArray7.length - 1) {
    imgIndex[changeImageValue7]++;
    seventhCarousel();
  } else if (imgIndex[changeImageValue7] == currentArray7.length - 1) {
    imgIndex[changeImageValue7] = 0;
    seventhCarousel();
  }
}

function prevImage7() {
  if (imgIndex[changeImageValue7] > 0) {
    imgIndex[changeImageValue7]--;
    seventhCarousel();
  } else if (imgIndex[changeImageValue7] == 0) {
    imgIndex[changeImageValue7] = currentArray7.length - 1;
    seventhCarousel();
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