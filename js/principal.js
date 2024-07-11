/**Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos 
datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas. 
Se tienen las siguientes personas: Luis, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, 
Liz, Marcos y Leo */

import Cl_personas from "./Cl_personas.js";
import Cl_contador from "./Cl_contador.js";

let cont = new Cl_contador();

let p1 = new Cl_personas("Luis", "M");
let p2 = new Cl_personas("Ana", "F");
let p3 = new Cl_personas("Jose", "M");
let p4 = new Cl_personas("Carmen", "F");
let p5 = new Cl_personas("Rosa", "F");
let p6 = new Cl_personas("Jose", "M");
let p7 = new Cl_personas("Maria", "F");
let p8 = new Cl_personas("Luz", "F");
let p9 = new Cl_personas("Rafael", "M");
let p10 = new Cl_personas("Liz", "F");
let p11 = new Cl_personas("Marcos", "M");
let p12 = new Cl_personas("Leo", "M");

cont.procesarPersonas(p1);
cont.procesarPersonas(p2);
cont.procesarPersonas(p3);
cont.procesarPersonas(p4);
cont.procesarPersonas(p5);
cont.procesarPersonas(p6);
cont.procesarPersonas(p7);
cont.procesarPersonas(p8);
cont.procesarPersonas(p9);
cont.procesarPersonas(p10);
cont.procesarPersonas(p11);
cont.procesarPersonas(p12);

let salida = document.getElementById("salida");

salida.innerHTML = `
Cantidad de personas: ${cont.contPersonas}
<br>Cantidad de hombres: ${cont.contM}
<br>Cantidad de mujeres: ${cont.contF}`