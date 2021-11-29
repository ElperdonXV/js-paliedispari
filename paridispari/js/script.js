//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random(sempre da 1 a 5) per il computer
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari
//Dichiariamo chi ha vinto
//(corrispondenza tra scelta pari e dispari e somma pari o dispari)
//In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

let scelta = '';
const pari = 'pari';
const dispari = 'dispari';
let esito = false;
while (esito != true){
    scelta = prompt('pari o dispari?');
    if (scelta == pari || scelta == dispari){
        esito = true;
    }
    else alert('Devi inserire o pari o dispari!');
}

const min = 1;
const max = 5;
let esitoTwo = false;
while (esitoTwo != true){
    let numUser = prompt('Adesso scegli un numero tra 1 e 5');
    if(numUser>=min && numUser<=max){
        esitoTwo = true;
    }
    else alert('Devi inserire un numero compreso tra 1 e 5!');
}

let numAi = Math.floor(Math.random() * (max - min) + min);
console.log(numAi);
let somma = numUser + numAi;
let risultato = '';
if(somma % 2 != 0){
    risultato = 'dispari';
}
else risultato = 'pari';

if (scelta == risultato){
    alert('Hai vinto, che fortuna!');
}
else alert('Hai perso, sfigato');