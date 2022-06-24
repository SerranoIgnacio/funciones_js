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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/
let cant = prompt('Ingrese cantidad de invitados de 1 a 3');
let res;
function generarInvitados(){
    if (cant >0 && cant < 4){
        
        if (cant == 1){
            let nom1 = prompt('Ingrese nombre del invitado 1');
            let res = ("Los nombres de los invitados son: " + nom1);
        }else if (cant == 2){
            let nom1 = prompt('Ingrese nombre del invitado 1');
            let nom2 = prompt('Ingrese nombre del invitado 2');
            let res = ("Los nombres de los invitados son: " + nom1 + ", " + nom2);
        }else{
            let nom1 = prompt('Ingrese nombre del invitado 1');
            let nom2 = prompt('Ingrese nombre del invitado 2');
            let nom3 = prompt('Ingrese nombre del invitado 3');
            let res = ("Los nombres de los invitados son: " + nom1 + ", " + nom2 + ", " + nom3);
        }
    }else{
        alert('La cantidad debe estar entre 1 y 3.')
    }
    return(res)
}

let invitados = '';
invitados = generarInvitados();
alert(`Mis invitados: ${invitados}`);
alert("FIN Ejercicio Profu 2.");