//chiedere all'utente il numero di km da percorrere e memorizzarlo in una variabile
//chiedere all'utente l'età del passeggero e memorizzarlo in una variabile

//calcolare il prezzo totale del viaggio basandosi sulle due variabili precedenti

//calcolare il prezzo  totale del viaggio sapendo che ogni km costa 0.21€
//? SE l'età dell'utente è inferiore ai 18 anni 
// ALLORA applicare uno sconto del 20% al prezzo totale
//? SE l'età dell'utente è superiore ai 65 anni 
// ALLORA applicare uno sconto del 40% al prezzo totale

let distanceKm = parseInt(prompt("Inserisci la distanza dalla tua destinazione in KM"));
let userAge = prompt("Inserisci la tua età");

console.log(distanceKm);

let totalPrice = (distanceKm * (0.21));

console.log(totalPrice);

