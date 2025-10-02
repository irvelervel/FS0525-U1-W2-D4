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
