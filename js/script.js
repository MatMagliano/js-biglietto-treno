alert('hello')
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.


//inserire chilometri da percorrere
var insertKm = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(insertKm);

//inserire nome e cognome
var nome = prompt('Inserire nome e cognome')
console.log(nome);

//inserire età
var età = parseInt(prompt('Quanti anni hai?'));
console.log(età);

//prezzo biglietto intero
var ticketPrice = insertKm * 0.21;
console.log(ticketPrice + '0€');
