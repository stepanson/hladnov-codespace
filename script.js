let had = [document.querySelector(".had")]
// push (i) vlozi i na konec
// unshift(i) vlozi i na zacatek
//pop () => i odebere posledni prvek
//shift()=> odebere první prvek

function pohniHadem(dolu, doprava) {
  const hadiHlava = had[0] 
  //had 0 = uplne prvni prvek pole zacatek(0,1,2,3,4...)konec
    console.log("Had je na " + hadiHlava.id);

  let radek = parseInt(hadiHlava.id.split(":")[0]);
  let sloupec = parseInt(hadiHlava.id.split(":")[1]);
  //rozdeli souradnici na radek a sloupec
  const idCil = radek + dolu + ":" + (sloupec + doprava);
  console.log("Had bude na " + idCil);
//vyplyvne konecne souradnice, tam kde had bude mit hlavu, doprava muze byt pozitivni i negativni, 
// idCil je zaroven pozice i hadiHlava
  const CilovePolicko = document.getElementById(idCil);

  had.unshift(CilovePolicko);

  CilovePolicko.classList.add("had");
  
  if(CilovePolicko.classList.contains("zradlo")) {
    console.log("had bude zrat");
    CilovePolicko.classList.remove("zradlo");
  } else {
    const poleKterePrestavaBytHadem = had.pop();
    poleKterePrestavaBytHadem.classList.remove("had");
  }
}

function pohyb(udalost) {
  if (udalost.which === 37) {
    console.log("Hade, jdi doleva pls");
    pohniHadem(0, -1);
  }
  if (udalost.which === 38) {
    console.log("Hade, jdi nahoru pls");
    pohniHadem(-1, 0);
  }
  if (udalost.which === 39) {
    console.log("Hade, jdi doprava pls");
    pohniHadem(0, 1);
  }
  if (udalost.which === 40) {
    console.log("Hade, jdi dolů pls");
    pohniHadem(1, 0);
  }
}



document.addEventListener("keydown", pohyb);
