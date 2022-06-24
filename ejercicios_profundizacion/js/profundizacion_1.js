"use strict";
/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;

function inputData() {
    n1 = parseInt(prompt("Ingrese un número 1 para analizar"));
    n2 = parseInt(prompt("Ingrese un número 2 para analizar"));
    n3 = parseInt(prompt("Ingrese un número 3 para analizar"));
    n4 = parseInt(prompt("Ingrese un número 4 para analizar"));
    n5 = parseInt(prompt("Ingrese un número 5 para analizar"));
}
function promedio(a, b, c, d, e) {
    if ((n1 !== NaN) && (n2 !== NaN) && (n3 !== NaN) && (n4 !== NaN) && (n5 !== NaN)){
        alert(`El promedio de los numeros ${n1}, ${n2}, ${n3}, ${n4}, ${n5} es: ${(n1+n2+n3+n4+n5) / 5}`);
        console.log((n1+n2+n3+n4+n5) / 5);
    } else{
        alert('Ingrese valores numericos.')
    }
    
}