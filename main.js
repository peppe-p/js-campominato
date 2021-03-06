//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati.
function genNumb(min, max) {
    return parseInt(Math.random() * (max - min)) + min;
}

var bomb_number = [];
while (bomb_number.length < 16) {
    var n = genNumb(1, 100);
    if (!bomb_number.includes(n)) {
        bomb_number.push(n);
    }
}

/* All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */
var selected_level = parseInt(prompt("Scegli un livello [ 1 / 2 / 3 ]"));
var level = 100;
switch (selected_level) {
    case 1:
        level = 100
        break;

    case 2:
        level = 80
        break;

    case 3:
        level = 50
        break;
}
var max = level - 16;
console.log(bomb_number);
//In seguito deve chiedere all’utente(100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
var n_list = [];
for (var i = 0; i < max; i++) {
    var n_user = parseInt(prompt("Inserisci un numero da 1 a " + level));
    if (!bomb_number.includes(n_user)) {
        if (!n_list.includes(n_user)) {
            n_list.push(n_user);
        } else {
            //Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
            alert("Hai gia inserito questo numero!      I numeri inseriti: " + n_list);
            i--;
        }
    } else {
        //Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
        alert("Hai beccato una bomba! HAI PERSO!            Punteggio: " + n_list.length);
        break;
    }

}


//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
if (n_list.length == (max - 16)) {
    alert('Congratulazioni!  HAI VINTO!          Punteggio:' + n_list.length);
}

