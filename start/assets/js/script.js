//prima riga
var nome = 'Aldo';
let cliente = 'cliente';
const numero = '3.14';

document.getElementById('concatena').innerHTML = nome + ', ' + cliente + ', ' + numero;

//seconda riga

var combinazione = nome + ', ' + cliente + ', ' + numero;
document.getElementById('concatena2').innerHTML = combinazione;

//terza riga

var nome = 'Mario';

document.getElementById('var').innerHTML = nome;
{
    let nome = 'Carla';
    document.getElementById('let').innerHTML = nome;
    document.getElementById('let3').innerHTML = nome;
    document.getElementById('final2').innerHTML = nome;
}
document.getElementById('final').innerHTML = nome;
document.getElementById('let2').innerHTML = nome;

//quarta riga
var numero1 = 15;
var numero2 = 10;
var trenta = 30;
var cinque = 5;


document.getElementById('iniziale').innerHTML += numero1;
document.getElementById('valore1').innerHTML += (numero1 + numero1) + ', ' + (trenta++ + 1);
document.getElementById('valore2').innerHTML += (numero1 - numero2) + ', ' + (cinque-- - 1);
document.getElementById('valore3').innerHTML += numero1 * 3; 
document.getElementById('valore4').innerHTML += numero1 / 3;
document.getElementById('valore5').innerHTML += numero1 + ' ' + 'è un numero';