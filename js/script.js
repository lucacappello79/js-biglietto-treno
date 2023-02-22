//chiedere all'utente il numero di km da percorrere e memorizzarlo in una variabile
//chiedere all'utente l'età del passeggero e memorizzarlo in una variabile

//calcolare il prezzo totale del viaggio basandosi sulle due variabili precedenti

//calcolare il prezzo  totale del viaggio sapendo che ogni km costa 0.21€
//? SE l'età dell'utente è inferiore ai 18 anni 
// ALLORA applicare uno sconto del 20% al prezzo totale
//? SE l'età dell'utente è superiore ai 65 anni 
// ALLORA applicare uno sconto del 40% al prezzo totale
//comunicare all'utente la somma totale da pagare

let distanceKm = parseInt(prompt("Inserisci la distanza dalla tua destinazione in KM"));
let userAge = parseInt(prompt("Inserisci la tua età"));
let totalPrice = (distanceKm * (0.21));
let minorDiscount = (totalPrice / 100 * 20)
let seniorDiscount = (totalPrice / 100 * 40)

console.log("distanza totale " + distanceKm);
console.log("prezzo intero " + totalPrice);
console.log("sconto minorenni " + minorDiscount);
console.log("sconto senior " + seniorDiscount);

if (userAge < 18) {

    console.log(totalPrice - minorDiscount);

    document.writeln(`L'importo da pagare è di ${(totalPrice - minorDiscount).toFixed(2)} €`)

} else if (userAge > 65) {

    console.log(totalPrice - seniorDiscount) ;

    document.writeln(`L'importo da pagare è di ${(totalPrice - seniorDiscount).toFixed(2)} €`)


} else {

    console.log(totalPrice.toFixed(2))

}
