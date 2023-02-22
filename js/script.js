//chiedere all'utente il numero di km da percorrere e memorizzarlo in una variabile
//chiedere all'utente l'età del passeggero e memorizzarla in una variabile

//calcolare il prezzo totale del viaggio basandosi sulle due variabili precedenti

//calcolare il prezzo  totale del viaggio sapendo che ogni km costa 0.21€
//? SE l'età dell'utente è inferiore ai 18 anni 
// ALLORA applicare uno sconto del 20% al prezzo totale
//? SE l'età dell'utente è superiore ai 65 anni 
// ALLORA applicare uno sconto del 40% al prezzo totale
// ALTRIMENTI applicare il prezzo intero
//comunicare all'utente la somma totale da pagare

let distanceKm = parseInt(prompt("Inserisci la distanza dalla tua destinazione in KM"));
let userAge = parseInt(prompt("Inserisci la tua età"));
let totalPrice = (distanceKm * (0.21)); //carissimo
let minorDiscount = (totalPrice / 100 * 20)
let seniorDiscount = (totalPrice / 100 * 40)
//test
let importo = `<h1> L' importo da pagare è di ${totalPrice.toFixed(2)} €</h1>`
//fine test

// -------- da usare per seconda soluzione

// let minorPrice = (totalPrice - minorDiscount)
// let seniorPrice = (totalPrice - seniorDiscount)

// ------- fine sol 2

console.log("distanza totale " + distanceKm);
console.log("prezzo intero " + totalPrice);
console.log("sconto minorenni " + minorDiscount);
console.log("sconto senior " + seniorDiscount);


if (userAge < 18) {

    console.log(totalPrice - minorDiscount);

    document.writeln(`L'importo da pagare è di ${(totalPrice - minorDiscount).toFixed(2)} €`)

} else if (userAge > 65) {

    // console.log((totalPrice - seniorDiscount).toFixed(2)); con tofixed ma non voglio usarlo in console log
    console.log(totalPrice - seniorDiscount);

    document.writeln(`L' importo da pagare è di ${(totalPrice - seniorDiscount).toFixed(2)} €`)

} else {

    console.log(totalPrice.toFixed(2))

    document.writeln(`L' importo da pagare è di ${totalPrice.toFixed(2)} €`)

    //test
    document.body.innerHTML = importo;
    //fine test
}


//------------- oppure soluzione 2


// if (userAge < 18) {

//     console.log(minorPrice);

//     document.writeln(`L'importo da pagare è di ${minorPrice.toFixed(2)} €`)

// } else if (userAge > 65) {

//     // console.log((totalPrice - seniorDiscount).toFixed(2)); con tofixed ma non voglio usarlo in console log
//     console.log(seniorPrice);

//     document.writeln(`L' importo da pagare è di ${seniorPrice.toFixed(2)} €`)

// } else {

//     console.log(totalPrice.toFixed(2))

//     document.writeln(`L' importo da pagare è di ${totalPrice.toFixed(2)} €`)

// }
