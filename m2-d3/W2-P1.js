/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let numOne = 8
let numTwo = 9
console.log( Math.max(numOne, numTwo));*/


/*let z= numOne>numTwo ?  console.log(numOne):console.log(numTwo);*/


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*let num = 6

if(num!=5){
  console.log("not equal");
}*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let num = 25

if(num%5===0){
  console.log("divisible by 5");
}*/


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/*
x = 35
y = 76
x, y === 8 ? console.log("yes"): console.log("no") || x -y === 8 ? console.log("yes") : console.log("no");
*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let totalShoppingCart = 45

if (totalShoppingCart > 50){
  console.log(totalShoppingCart);
}else{
  console.log(totalShoppingCart + 10);
}
*/


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
let totalShoppingCart = 60
let blackFriday = totalShoppingCart - (totalShoppingCart * 20 / 100 )

if (totalShoppingCart > 50) {
  console.log(blackFriday);
} else {
  console.log(blackFriday + 10);
}
*/







/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*
 let a = 5
 let b = 222
 let c = 13
 if ((a > b) && (b > c)) {
   console.log("a=" + a);
   console.log("b=" + b);
   console.log("c=" + c);
 } else if ((a > c) && (c > b)) {
   console.log("a=" + a);
   console.log("c=" + c);
   console.log("b=" + b);
 } else if ((b > a) && (a > c)) {
   console.log("b=" + b);
   console.log("a=" + a);
   console.log("c=" + c);
 } else if ((b > c) && (c > a)) {
   console.log("b=" + b);
   console.log("c=" + c);
   console.log("a=" + a);
 } else if ((c > a) && (a > b)) {
   console.log("c=" + c);
   console.log("a=" + a);
   console.log("b=" + b);
 } else if ((c > b) && (b > a)) {
   console.log("c=" + c);
   console.log("a=" + a);
   console.log("b=" + b);
 }
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/*
let num = 23

console.log(typeof num);

*/


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*
let num = 23

if ( num % 2 === 0) {
console.log("pari");
} else {
  console.log("dispari");
}
*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

/*
let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
*/


/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.
*/
/* 
  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
/* 
let num = 86

  if (num < 5) {

    console.log("Tiny");

  } else if (num < 10) {

    console.log("Small");

  } else if ( num < 15) {

    console.log("Medium");

  } else if (num < 20){

    console.log("Large");
  
  } else if (num >= 20) {

    console.log("Huge");
  }
  */


/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
/*
let isMale = "female"

let gender = isMale==="male" ? console.log("male") : console.log("female");
 */


/* ESERCIZIO 13 ??????????????????????
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/*
let i = 0

while (i <= 5) {
  i;  i++;
  console.log(i);
}
 */

/* ESERCIZIO 14  ????????????????????????
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/*
let i = 0

for (let i = 0; i <= 10; i++) {
  console.log(i);
  
}
*/
/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
/*
for (let index = 0; index <= 10; index++) {
  if (index === 3) {
    continue
  }
  if (index === 8) {
    continue
  }
  console.log(index);
}
*/
/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*
 for (let index = 0; index <= 15; index++) {
  if (index % 2 === 0) {
    console.log(index + "pari");
  }
  if (index % 2 !== 0) {
    console.log(index + "dispari");
  }
 }

*/
/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
/*
for (let index = 1; index <= 100; index++) {
 if (index % 3 === 0) {
  console.log("fizz");
 } 
 if(index % 5 === 0) {
  console.log("buzz");
 }
if ((index % 3 === 0) && (index % 5 === 0))  {
  console.log("fizzbuzz");
}
else{
  console.log(index);
}
}
*/


/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/*
let day = 56

switch (day) {
  case 1:
    console.log("lunedi");
    break;

  case 2:
    console.log("martedi");
    break;

  case 3:
    console.log("mercoledi");
    break;
  case 4:
    console.log("giovedi");
    break;
  case 5:
    console.log("venerdi");
    break;
  case 6:
    console.log("sabato");
    break;
  case 7:
    console.log("domenica");
    break;
  default:
    break;
}
*/
