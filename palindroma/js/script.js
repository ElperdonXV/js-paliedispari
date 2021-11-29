//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
//(prima senza funzione e poi con funzione)

function palindroma(parola){
    let parola = prompt('Inserisci una parola');
    let parolaSuddivisa = parola.split('');
    parolaSuddivisa = parolaSuddivisa.reverse();
    let inverso = parolaSuddivisa.join('');
    let result = false;
    if (parola == inverso){
        result = true;
    }
    return result;
}

