// Chiedo il numero di km

var km = prompt ("Quanti km vuoi percorrere?");

console.log(km);

// Chiedo l'età del passeggero

var anni = prompt ("Quanti anni hai?");

console.log(anni);


// Calcolo prezzo e scontistica da applicare in relazione all'età

var prezzo = km * 0.21;

if (anni > 65) {
  var over65 = prezzo - (prezzo * 0.4);
  console.log(over65);
} else if (anni < 18) {
  var under18 = prezzo - (prezzo * 0.2);
  console.log(under18);
} else {
  var prezzo = prezzo;
  console.log(prezzo);
}

// Mostra il prezzo nel DOM in elemento con id = amount

if (anni > 65) {
  document.getElementById('amount').innerHTML = "Il totale del tuo biglietto è " + over65 + "€";
} else if (anni < 18) {
  document.getElementById('amount').innerHTML = "Il totale del tuo biglietto è " + under18 + "€";
} else {
  document.getElementById('amount').innerHTML = "Il totale del tuo biglietto è " + prezzo + "€";
}
