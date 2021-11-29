//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random(sempre da 1 a 5) per il computer
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari
//Dichiariamo chi ha vinto
//(corrispondenza tra scelta pari e dispari e somma pari o dispari)
//In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari


//creo funzione per i numeri random
function randomRangeNumber(number) {
    number = parseInt(Math.floor(Math.random() * (max - min) + min));
    return number;
}

//creo funzione per il check pari e dispari 
function evenOdd(num) {
    let risultato = '';
    if (num % 2 != 0) {
        risultato = 'dispari';
    }
    else {
         risultato = 'pari';
    }
    return risultato;
}

let scelta = '';
const pari = 'pari';
const dispari = 'dispari';
scelta = prompt('pari o dispari?');
let esito = false;
while (esito != true){
    if (scelta == pari || scelta == dispari){
        esito = true;
    }
    else alert('Devi inserire o pari o dispari!');
}

const min = 1;
const max = 5;
let esitoTwo = false;
let numUser = parseInt(prompt('Adesso scegli un numero tra 1 e 5'));
while (esitoTwo != true){
    if(numUser>=min && numUser<=max){
        esitoTwo = true;
    }
    else alert('Devi inserire un numero compreso tra 1 e 5!');
}

//let numAi = parseInt(Math.floor(Math.random() * (max - min) + min));
let numAi = randomRangeNumber(min, max);
let somma = numUser + numAi;
console.log(somma);
//let risultato = '';
//if(somma % 2 != 0){
//    risultato = 'dispari';
//}
//else risultato = 'pari';

let risultato = evenOdd(somma);

if (scelta == risultato){
    document.writeln('Hai vinto, che fortuna!');
}
else document.writeln('Hai perso, sfigato');

