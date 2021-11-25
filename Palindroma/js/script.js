/* 
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

//Parola dell'utente
const parola = prompt('Scrivi una parola: ');

let verificaPalindroma = palindroma(parola);

//Confronto le due parole
if (verificaPalindroma) {
    alert('La parola data è palindroma.');
} else {
    alert('La parola data non è palindroma.');
} 

function palindroma(parola) {
    let reverse = '';
    for (let i = parola.length - 1; i >= 0; i--) {
        reverse += parola[i];
    }
    let palindromaTrue;
    if (parola === reverse) {
        palindromaTrue = true;
    } else {
        palindromaTrue = false;
    }
    return palindromaTrue;
}

