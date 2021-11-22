/* 
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

//Parola dell'utente
const parola = prompt('Scrivi una parola: ')

//Divido la parola in caratteri
const caratteri = parola.split('');
console.log(caratteri);

//Inverto i caratteri
const parolaInvertita = caratteri.reverse();
console.log(parolaInvertita);

//Confronto le due parole
if (caratteri === parolaInvertita) {
    console.log('La parola data è palindroma.')
} else {
    console.log('La parola data non è palindroma.')
} 