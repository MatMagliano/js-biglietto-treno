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
var name = prompt('Inserire nome e cognome')
console.log(name);

//inserire età
var age = parseInt(prompt('Quanti anni hai?'));
console.log(age);

//prezzo biglietto intero
var ticketPrice = insertKm * 0.21;
console.log(ticketPrice + '0€');

//calcolo prezzo in base all'età
if (age < 18) {
  console.log(ticketPrice - ((ticketPrice * 20) / 100) + '0€');

} else if (age > 65) {
  console.log(ticketPrice - ((ticketPrice * 40) / 100) + '0€');
} else {
  console.log(ticketPrice);
}
