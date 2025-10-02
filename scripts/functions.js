// OGGI PARLIAMO DELLE FUNZIONI, un altro mattoncino fondamentale per
// imparare a sviluppare in QUALSIASI linguaggio di programmazione

// una FUNZIONE è un BLOCCO di istruzioni dotato di NOME.
// di solito serve a risolvere un problema specifico in un modo MANTENIBILE
// e RIUTILIZZABILE.

// 1) in JS una funzione PRIMA si DICHIARA con un NOME.
// 2) dopodiché questo blocco di codice si può INVOCARE (utilizzare) quante volte volete.

const bark = function () {
  // qui dentro ci andrà il nostro codice!
  console.log('BAU')
}

bark() // un console.log() come risultato

console.log('ORA COMINCIO UN CICLO FOR DA 5 ITERAZIONI')

for (let i = 0; i < 5; i++) {
  bark() // 5 esecuzioni di bark in totale, 5 console.log()
}

// altro esempio
const sayHelloToStefano = function () {
  let message = 'Ciao Stefano!'
  message = message.toUpperCase()
  message = message.slice(0, 4) // ritaglio i primi 4 chars -> 'CIAO'
  console.log(message)
}

// console.log('message', message) <-- message qui non esiste perchè
// tutte le variabili in JS (così come in tutti i linguaggi seri) hanno
// visibilità di blocco -> BLOCK SCOPED VARIABLES

sayHelloToStefano() // le tonde dopo il nome di funzione sono fondamentali

// --- WARNING --- non imparare quello che sto per fare

// bonk()

// function bonk() {
//   console.log('BONK')
// }

// perchè funziona? perchè il browser interpretando JS effettua un HOISTING
// della funzione, la SOLLEVA in cima al documento (di nascosto) e ci permette
// di invocarla :\\\

// --- FINE WARNING ---

// altri esempi :)
const somma = function () {
  const n1 = 6
  const n2 = 23
  const result = n1 + n2
  //   alert('Il risultato è ' + result) // lo commento perchè è fastidioso :)
}

somma()

const somma2 = function () {
  const n1 = 3
  const n2 = 18
  const result = n1 + n2
  console.log('RESULT 3 + 18', result)
}

somma2()

// quindi le nostre somme funzionano, però i valori di n1 e n2 al loro interno
// sono FISSI, STATICI e quindi per poter sommare valori diversi devo prevedere
// decine, centinaia di varianti della mia funziona somma...
// ...vedremo tra poco un modo per scrivere una funzione somma UNA VOLTA SOLA
// e permetterle di sommare due numeri QUALSIASI!
// PAUSA!

const greet = function () {
  console.log('Ciao, Giangiorgio!')
}

const greetMario = function () {
  console.log('Ciao, Mario!')
}

// il segreto per rendere queste funzioni più VERSATILI, in grado di ad es.
// sommare due numeri qualsiasi, o salutare una persona qualunque SENZA il bisogno
// di duplicare le funzioni e avere come risultato tantissime funzioni uguali
// ma diverse -> I PARAMETRI

// perchè se invece che sommare sempre i due numeri io riuscissi ad OGNI INVOCAZIONE
// a scegliere i numeri da sommare, mi basterebbe fare un'UNICA funzione di somma
// "UNIVERSALE"...
// ...stessa cosa per la funzione in grado di salutare una persona, se potessi
// invocarla e SCEGLIERE il nome della persona da salutare non avrei il bisogno
// di fare una diversa funzione per ogni nome italiano!

// PARAMETRI (o dati in ingresso, input etc.)
const smartGreet = function (nomeDaSalutare) {
  console.log('Ciao, ' + nomeDaSalutare)
}
// scrivere una funzione con uno o più parametri significa che la funzione
// si ASPETTERÀ questi dati durante la sua INVOCAZIONE

smartGreet('Riccardo')
smartGreet('Stefano')
smartGreet('Babbo Natale')

// i NOMI dei PARAMETRI sono assolutamente a VOSTRA SCELTA! seguite la classica
// nomenclatura camelCase
// i "placeholder" dentro la funzione vengono chiamati PARAMETRI
// i "valori", i "dati" che passate invocando le funzioni vengono chiamati ARGOMENTI

// altro esempio
// funzione in grado di sommare due numeri qualsiasi

// questa funzione ora si sta aspettando nella sua invocazione due argomenti
// di tipo numerico
const sommaConParametri = function (n1, n2) {
  const risultato = n1 + n2
  console.log('SMARTSOMMA RESULT', risultato)
}

sommaConParametri(90, 9) // 99
sommaConParametri(4, 78) // 82
sommaConParametri(1, 1) // 2

sommaConParametri('2', '34') // '234' :(
// sommaConParametri(50)  // 50 + undefined

// funzione con valori di default per i parametri
const sommaConParametriEDefault = function (n1, n2 = 0) {
  const risultato = n1 + n2
  console.log(risultato)
}

sommaConParametriEDefault(2, 6) // 8
sommaConParametriEDefault(7) // non c'è rischio che n2 diventi undefined
// perchè abbiamo inserito nella lista dei parametri della funzione un valore
// di default per n2 che è 0

// stessa cosa per i parametri con valore stringa, inserite il default
// a fianco della definizione del parametro
const salutaConDefault = function (nome = 'sconosciuto') {
  console.log('CIAO, ' + nome)
}

salutaConDefault('Gianni') // 'CIAO Gianni'
salutaConDefault()

// vediamo anche come gestire in autonomia eventuali errori
// controlliamo che il tipo del parametro nome sia/non sia undefined
// ciò significherebbe che NON È STATO FORNITO UN ARGOMENTO PER IL PARAMETRO nome
const salutaConGestioneErrore = function (nome) {
  if (typeof nome === 'undefined') {
    console.log('ERRORE! Non ho ricevuto il nome da salutare')
  } else {
    console.log('CIAO, ' + nome)
  }
}

salutaConGestioneErrore('Stefano') // 'CIAO, Stefano'
salutaConGestioneErrore() // 'ERRORE! Non ho ricevuto il nome da salutare'

const sommaConVerificaParametri = function (n1, n2) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    console.log(n1 + n2)
  } else {
    console.log('non sono stati forniti due valori numerici')
  }
}

sommaConVerificaParametri(4, 5) // 9
sommaConVerificaParametri('4', '5') // 'non sono stati forniti due valori numerici'
console.log(parseInt('5')) // 5
console.log(JSON.stringify(5)) // '5'

const names = ['Stefano', 'Gianni', 'Roberto', 'Maria']

const removeElementFromArray = function (arr, indexToDelete) {
  // questa funzione dovrebbe eliminare un elemento da un array
  // è necessario fornire alla funzione l'array su cui operare
  // e l'indice dell'elemento da eliminare
  arr.splice(indexToDelete, 1)
}

removeElementFromArray(names, 0)
console.log(names)
removeElementFromArray(names, 2)
console.log(names)
