//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//(prima senza funzione e poi con funzione)

function palindroma(parola){
    let parolaSuddivisa = parola.split('');
    parolaSuddivisa = parolaSuddivisa.reverse();
    let inverso = parolaSuddivisa.join('');
    let result = false;
    if (parola == inverso){
        result = true;
    }
    return result;
}

const parola = palindroma(prompt('Inserisci una parola'));
if (parola==false) {
    alert("non è una parola palindroma");
}
else alert("è una parola palindroma");