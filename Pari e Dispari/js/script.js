/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
//chiedo all'utente un numero da 1 a 5 e scegliere tra pari e dispari
const userNumber = parseInt(prompt('Scegli un numero:'));
const userChoise = prompt('Scegli pari o dispari:');
//numero del computer
const computerNumber = numeroRandom(1, 5);
//sommo i numeri e stabilisco se il risultato è pari o dispari
const sommaNumeri = userNumber + computerNumber;
const risultato = pariOdispari(sommaNumeri);
//output
if (userChoise === pariOdispari) {
    alert('Ha vinto!');
} else {
    alert('Hai perso.')
}

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariOdispari(number) {
    let result;
    if (number % 2 === 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }
    return result;
}