// Chiedo il numero di km

var km = prompt ("Quanti km vuoi percorrere?");

console.log(km);

// Chiedo l'età del passeggero

var anni = prompt ("Quanti anni hai?");

console.log(anni);


// Calcolo prezzo e scontistica da applicare in relazione all'età

var prezzo = console.log(km * 0.21 + "€");

if (anni > 65) {
  var prezzo = console.log(prezzo - (prezzo * 0.4));
} else if (anni < 18) {
  
} else {
  var prezzo = console.log(km * 0.21 + "€");
}
