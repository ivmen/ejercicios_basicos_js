//1.1

const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;

console.log(jedi.nombre + " tiene " + jedi.edad + " años");

//1.2

const nombre = "Leia";

const apellido = "Organa";

const edad = 20;

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

//1.3

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const sumaSables = sable1.precio + sable2.precio; 

console.log("El precio total de el " + sable1.nombre + " y el " + sable2.nombre + " es " + sumaSables + " creditos");

//1.4

let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Con la nueva subida del precio base global el " + nave1.nombre + " es de " + nave1.precioFinal + " creditos y el precio de el " + nave2.nombre + " es de " + nave2.precioFinal);
