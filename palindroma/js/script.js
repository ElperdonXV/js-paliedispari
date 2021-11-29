//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//(prima senza funzione e poi con funzione)
let parola = prompt('Inserisci una parola');
let parolaSuddivisa = parola.split('');
parolaSuddivisa = parolaSuddivisa.reverse();
let inverso = parolaSuddivisa.join('');
console.log(inverso);
if (parola == inverso){
    console.log( parola + " è una parola palindroma");
}
else console.log(parola + " non è una parola palindroma");