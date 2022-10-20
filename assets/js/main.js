function generaPrezzo(){
    let numeroKm = parseFloat(document.getElementById('numeroKm').value);
    let age = document.getElementById('age').value;
    let name = document.getElementById('name').value;
    let carrozza = Math.floor(Math.random()*10 +1);
    let codiceCp = Math.floor(Math.random()*89999 +1);


    const prezzoKm = 0.21;
    let prezzoBiglietto = parseFloat(numeroKm * prezzoKm);
    let minorenni = prezzoBiglietto * 0.2;
    let over65 = prezzoBiglietto * 0.4;
    

    if (age == "minorenne") {
    prezzoBiglietto = (prezzoBiglietto - minorenni).toFixed(2);
    document.getElementById('offerta').innerHTML = "Offerta 20%";
    }

    else if (age == "anziano") {
    prezzoBiglietto = (prezzoBiglietto - over65).toFixed(2) ;
    document.getElementById('offerta').innerHTML = "Offerta 40%";
    }

    else {
    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    document.getElementById('offerta').innerHTML = "Standard";
    }

    document.getElementById('costoBiglietto').innerHTML = +prezzoBiglietto+ "€";
    document.getElementById('randomCarrozza').innerHTML = carrozza;
    document.getElementById('randomcodiceCp').innerHTML = codiceCp;
    document.getElementById('passenger').innerHTML = name;
    
}
