const aluminiumMinPrice = 0.40;
const aluminiumMaxPrice = 0.90;

const copperMinPrice = 4.00;
const copperMaxPrice = 5.00;

const brassMinPrice = 2.00;
const brassMaxPrice = 2.70;

const cablesMinPrice = 0.50;
const cablesMaxPrice = 2.60;

// SWITCH NAV MOBILE

const bodyVar = document.querySelector("body");
const menuBtnVar = document.querySelector('.hamburger');
const menuBar1Var = document.querySelector('.bar1');
const menuBar2Var = document.querySelector('.bar2');
const menuBar3Var = document.querySelector('.bar3');
const menuVar = document.querySelector('.menu');
let menuOpen = false;

const englishLanguage = function() {
  window.location.href = 'index.html';
}

const polishLanguage = function() {
  window.location.href = 'polish.html';
}

const openNavMobile = function() {
  menuBtnVar.classList.add('open');
  menuOpen = true;
  menuBar1Var.style.backgroundColor = "#eee";
  menuBar2Var.style.backgroundColor = "#eee";
  menuBar3Var.style.backgroundColor = "#eee";
  bodyVar.style.backgroundColor = "rgba(0,0,0,0.1)";
  menuBtnVar.style.border = "0";
  menuVar.style.backgroundColor = "#12002e";
  menuVar.style.display = "block";
}
const closeNavMobile = function() {
  menuBtnVar.classList.remove('open');
  menuOpen = false;
  menuBar1Var.style.backgroundColor = "black";
  menuBar2Var.style.backgroundColor = "black";
  menuBar3Var.style.backgroundColor = "black";
  menuBtnVar.style.borderLeft = "0.5vh solid black";
  menuVar.style.display = "none";
}

  menuBtnVar.addEventListener('click', () => {
  if(!menuOpen) {
    return openNavMobile();
  }
  else {
    return closeNavMobile();
  }
});

// SCROLL TO POSITION

function startScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function aboutCompanyScroll() {
  window.scrollTo({
    top: window.visualViewport.height,
    behavior: 'smooth',
  });
}

function ourServicesScroll() {
  window.scrollTo({
    top: window.visualViewport.height * 2,
    behavior: 'smooth',
  });
}

function priceListScroll() {
  window.scrollTo({
    top: window.visualViewport.height * 4,
    behavior: 'smooth',
  });
}

function contactScroll() {
  window.scrollTo({
    top: window.visualViewport.height * 5,
    behavior: 'smooth',
  });
}

function startScrollMobile() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return closeNavMobile();
}

function aboutCompanyScrollMobile() {
  window.scrollTo({
    top: window.visualViewport.height,
    behavior: 'smooth',
  });
  return closeNavMobile();
}

function ourServicesScrollMobile() {
  window.scrollTo({
    top: window.visualViewport.height * 2,
    behavior: 'smooth',
  });
  return closeNavMobile();
}

function priceListScrollMobile() {
  window.scrollTo({
    top: window.visualViewport.height * 6,
    behavior: 'smooth',
  });
  return closeNavMobile();
}

function contactScrollMobile() {
  window.scrollTo({
    top: window.visualViewport.height * 7,
    behavior: 'smooth',
  });
  return closeNavMobile();
}

// PRICE LIST - SUBMIT PRICE

function aluminiumSubmitPrice() {
  const aluminiumInputVar = document.querySelector(".aluminiumInput").value;
  const aluminiumPriceVar = document.querySelector(".aluminiumPrice");

  let aluminiumSubmitMinPrice = aluminiumMinPrice * aluminiumInputVar;
  let aluminiumSubmitMaxPrice = aluminiumMaxPrice * aluminiumInputVar;


  if (aluminiumSubmitMinPrice <= 99.99) {
    var roundedAluminiumSubmitMinPrice = aluminiumSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedAluminiumSubmitMinPrice = aluminiumSubmitMinPrice.toFixed(0);
  }


  if (aluminiumSubmitMaxPrice <= 99.99) {
    var roundedAluminiumSubmitMaxPrice = aluminiumSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedAluminiumSubmitMaxPrice = aluminiumSubmitMaxPrice.toFixed(0);
  }

  if (aluminiumInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedAluminiumSubmitMinPrice = 0;
    var roundedAluminiumSubmitMaxPrice = 0;
  }

  if (aluminiumInputVar <= 10) {
    aluminiumPriceVar.innerHTML = roundedAluminiumSubmitMinPrice + " £";
  }
  else {
    aluminiumPriceVar.innerHTML = roundedAluminiumSubmitMaxPrice + " £";
  }
}

function copperSubmitPrice() {
  const copperInputVar = document.querySelector(".copperInput").value;
  const copperPriceVar = document.querySelector(".copperPrice");

  let copperSubmitMinPrice = copperMinPrice * copperInputVar;
  let copperSubmitMaxPrice = copperMaxPrice * copperInputVar;


  if (copperSubmitMinPrice <= 99.99) {
    var roundedCopperSubmitMinPrice = copperSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedCopperSubmitMinPrice = copperSubmitMinPrice.toFixed(0);
  }


  if (copperSubmitMaxPrice <= 99.99) {
    var roundedCopperSubmitMaxPrice = copperSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedCopperSubmitMaxPrice = copperSubmitMaxPrice.toFixed(0);
  }

  if (copperInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedCopperSubmitMinPrice = 0;
    var roundedCopperSubmitMaxPrice = 0;
  }

  if (copperInputVar <= 10) {
    copperPriceVar.innerHTML = roundedCopperSubmitMinPrice + " £";
  }
  else {
    copperPriceVar.innerHTML = roundedCopperSubmitMaxPrice + " £";
  }
}

function brassSubmitPrice() {
  const brassInputVar = document.querySelector(".brassInput").value;
  const brassPriceVar = document.querySelector(".brassPrice");

  let brassSubmitMinPrice = brassMinPrice * brassInputVar;
  let brassSubmitMaxPrice = brassMaxPrice * brassInputVar;

  if (brassSubmitMinPrice <= 99.99) {
    var roundedBrassSubmitMinPrice = brassSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedBrassSubmitMinPrice = brassSubmitMinPrice.toFixed(0);
  }


  if (brassSubmitMaxPrice <= 99.99) {
    var roundedBrassSubmitMaxPrice = brassSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedBrassSubmitMaxPrice = brassSubmitMaxPrice.toFixed(0);
  }

  if (brassInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedBrassSubmitMinPrice = 0;
    var roundedBrassSubmitMaxPrice = 0;
  }

  if (brassInputVar <= 10) {
    brassPriceVar.innerHTML = roundedBrassSubmitMinPrice + " £";
  }
  else {
    brassPriceVar.innerHTML = roundedBrassSubmitMaxPrice + " £";
  }
}

function cablesSubmitPrice() {
  const cablesInputVar = document.querySelector(".cablesInput").value;
  const cablesPriceVar = document.querySelector(".cablesPrice");

  let cablesSubmitMinPrice = cablesMinPrice * cablesInputVar;
  let cablesSubmitMaxPrice = cablesMaxPrice * cablesInputVar;

  if (cablesSubmitMinPrice <= 99.99) {
    var roundedCablesSubmitMinPrice = cablesSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedCablesSubmitMinPrice = cablesSubmitMinPrice.toFixed(0);
  }


  if (cablesSubmitMaxPrice <= 99.99) {
    var roundedCablesSubmitMaxPrice = cablesSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedCablesSubmitMaxPrice = cablesSubmitMaxPrice.toFixed(0);
  }

  if (cablesInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedCablesSubmitMinPrice = 0;
    var roundedCablesSubmitMaxPrice = 0;
  }

  if (cablesInputVar <= 10) {
    cablesPriceVar.innerHTML = roundedCablesSubmitMinPrice + " £";
  }
  else {
    cablesPriceVar.innerHTML = roundedCablesSubmitMaxPrice + " £";
  }
}
