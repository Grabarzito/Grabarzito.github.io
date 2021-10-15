const aluminiumMinPrice = 0.50;
const aluminiumMaxPrice = 0.80;

const copperMinPrice = 4.00;
const copperMaxPrice = 5.00;

const brassMinPrice = 2.20;
const brassMaxPrice = 2.70;

const cablesMinPrice = 0.50;
const cablesMaxPrice = 2.60;

const zincMinPrice = 0.50;
const zincMaxPrice = 0.70;

const leadMinPrice = 0.90;
const leadMaxPrice = 1.10;

const steelMinPrice = 0.50;
const steelMaxPrice = 0.90;

const nickelMinPrice = 8.00;
const nickelMaxPrice = 11.50;

const ironMinPrice = 0.07;
const ironMaxPrice = 0.12;

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
  document.querySelector(".aboutCompanySection").scrollIntoView({behavior: 'smooth'});
}

function ourServicesScroll() {
  document.querySelector(".ourServicesSection").scrollIntoView({behavior: 'smooth'});
}

function priceListScroll() {
  document.querySelector(".priceListSection").scrollIntoView({behavior: 'smooth'});
}

function contactScroll() {
  document.querySelector(".contactSection").scrollIntoView({behavior: 'smooth'});
}

function startScrollMobile() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  return closeNavMobile();
}

function aboutCompanyScrollMobile() {
  document.querySelector(".aboutCompanySection").scrollIntoView({behavior: 'smooth'});
  return closeNavMobile();
}

function ourServicesScrollMobile() {
  document.querySelector(".ourServicesSection").scrollIntoView({behavior: 'smooth'});
  return closeNavMobile();
}

function priceListScrollMobile() {
  document.querySelector(".priceListSection").scrollIntoView({behavior: 'smooth'});
  return closeNavMobile();
}

function contactScrollMobile() {
  document.querySelector(".contactSection").scrollIntoView({behavior: 'smooth'});
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

function zincSubmitPrice() {
  const zincInputVar = document.querySelector(".zincInput").value;
  const zincPriceVar = document.querySelector(".zincPrice");

  let zincSubmitMinPrice = zincMinPrice * zincInputVar;
  let zincSubmitMaxPrice = zincMaxPrice * zincInputVar;

  if (zincSubmitMinPrice <= 99.99) {
    var roundedZincSubmitMinPrice = zincSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedZincSubmitMinPrice = zincSubmitMinPrice.toFixed(0);
  }


  if (zincSubmitMaxPrice <= 99.99) {
    var roundedZincSubmitMaxPrice = zincSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedZincSubmitMaxPrice = zincSubmitMaxPrice.toFixed(0);
  }

  if (zincInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedZincSubmitMinPrice = 0;
    var roundedZincSubmitMaxPrice = 0;
  }

  if (zincInputVar <= 10) {
    zincPriceVar.innerHTML = roundedZincSubmitMinPrice + " £";
  }
  else {
    zincPriceVar.innerHTML = roundedZincSubmitMaxPrice + " £";
  }
}

function leadSubmitPrice() {
  const leadInputVar = document.querySelector(".leadInput").value;
  const leadPriceVar = document.querySelector(".leadPrice");

  let leadSubmitMinPrice = leadMinPrice * leadInputVar;
  let leadSubmitMaxPrice = leadMaxPrice * leadInputVar;

  if (leadSubmitMinPrice <= 99.99) {
    var roundedLeadSubmitMinPrice = leadSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedLeadSubmitMinPrice = leadSubmitMinPrice.toFixed(0);
  }


  if (leadSubmitMaxPrice <= 99.99) {
    var roundedLeadSubmitMaxPrice = leadSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedLeadSubmitMaxPrice = leadSubmitMaxPrice.toFixed(0);
  }

  if (leadInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedLeadSubmitMinPrice = 0;
    var roundedLeadSubmitMaxPrice = 0;
  }

  if (leadInputVar <= 10) {
    leadPriceVar.innerHTML = roundedLeadSubmitMinPrice + " £";
  }
  else {
    leadPriceVar.innerHTML = roundedLeadSubmitMaxPrice + " £";
  }
}

function steelSubmitPrice() {
  const steelInputVar = document.querySelector(".steelInput").value;
  const steelPriceVar = document.querySelector(".steelPrice");

  let steelSubmitMinPrice = steelMinPrice * steelInputVar;
  let steelSubmitMaxPrice = steelMaxPrice * steelInputVar;

  if (steelSubmitMinPrice <= 99.99) {
    var roundedSteelSubmitMinPrice = steelSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedSteelSubmitMinPrice = steelSubmitMinPrice.toFixed(0);
  }


  if (steelSubmitMaxPrice <= 99.99) {
    var roundedSteelSubmitMaxPrice = steelSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedSteelSubmitMaxPrice = steelSubmitMaxPrice.toFixed(0);
  }

  if (steelInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedSteelSubmitMinPrice = 0;
    var roundedSteelSubmitMaxPrice = 0;
  }

  if (steelInputVar <= 10) {
    steelPriceVar.innerHTML = roundedSteelSubmitMinPrice + " £";
  }
  else {
    steelPriceVar.innerHTML = roundedSteelSubmitMaxPrice + " £";
  }
}

function nickelSubmitPrice() {
  const nickelInputVar = document.querySelector(".nickelInput").value;
  const nickelPriceVar = document.querySelector(".nickelPrice");

  let nickelSubmitMinPrice = nickelMinPrice * nickelInputVar;
  let nickelSubmitMaxPrice = nickelMaxPrice * nickelInputVar;

  if (nickelSubmitMinPrice <= 99.99) {
    var roundedNickelSubmitMinPrice = nickelSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedNickelSubmitMinPrice = nickelSubmitMinPrice.toFixed(0);
  }


  if (nickelSubmitMaxPrice <= 99.99) {
    var roundedNickelSubmitMaxPrice = nickelSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedNickelSubmitMaxPrice = nickelSubmitMaxPrice.toFixed(0);
  }

  if (nickelInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedNickelSubmitMinPrice = 0;
    var roundedNickelSubmitMaxPrice = 0;
  }

  if (nickelInputVar <= 10) {
    nickelPriceVar.innerHTML = roundedNickelSubmitMinPrice + " £";
  }
  else {
    nickelPriceVar.innerHTML = roundedNickelSubmitMaxPrice + " £";
  }
}

function ironSubmitPrice() {
  const ironInputVar = document.querySelector(".ironInput").value;
  const ironPriceVar = document.querySelector(".ironPrice");

  let ironSubmitMinPrice = ironMinPrice * ironInputVar;
  let ironSubmitMaxPrice = ironMaxPrice * ironInputVar;

  if (ironSubmitMinPrice <= 99.99) {
    var roundedIronSubmitMinPrice = ironSubmitMinPrice.toFixed(2);
  }
  else {
    var roundedIronSubmitMinPrice = ironSubmitMinPrice.toFixed(0);
  }


  if (ironSubmitMaxPrice <= 99.99) {
    var roundedIronSubmitMaxPrice = ironSubmitMaxPrice.toFixed(2);
  }
  else {
    var roundedIronSubmitMaxPrice = ironSubmitMaxPrice.toFixed(0);
  }

  if (ironInputVar >= 10000) {
    alert("Enter the correct number! (max 10 000)")
    var roundedIronSubmitMinPrice = 0;
    var roundedIronSubmitMaxPrice = 0;
  }

  if (ironInputVar <= 10) {
    ironPriceVar.innerHTML = roundedIronSubmitMinPrice + " £";
  }
  else {
    ironPriceVar.innerHTML = roundedIronSubmitMaxPrice + " £";
  }
}
