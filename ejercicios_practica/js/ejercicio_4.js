"use strict";


// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/

// Definir y crear la función antes de esta llamada
/**
 * @fileoverview Ejercitación de Funciones
 * @author       Nacho <nachoe44@gmail.com>
 * @copyright    ignacioserrano.com.ar
 */
function generarInvitados(){
    let nom1;
    let nom2;
    let nom3;
    let res;
    nom1 = prompt('Ingrese nombre del invitado 1')
    nom2 = prompt('Ingrese nombre del invitado 2')
    nom3 = prompt('Ingrese nombre del invitado 3')
    res = ("Los nombres de los invitados son: " + nom1 + ", " + nom2 + ", " + nom3)
    return(res)
}
let invitados = '';
invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)

alert("FIN Ejercicio 4.");