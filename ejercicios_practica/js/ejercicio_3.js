"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones
/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada
function generarInvitados(){
    let nom1;
    let nom2;
    let nom3;
    nom1 = prompt('Ingrese nombre del invitado 1')
    nom2 = prompt('Ingrese nombre del invitado 2')
    nom3 = prompt('Ingrese nombre del invitado 3')
    console.log(nom1)
    console.log(nom2)
    console.log(nom3)
}

generarInvitados();
alert("FIN Ejercicio 3.");