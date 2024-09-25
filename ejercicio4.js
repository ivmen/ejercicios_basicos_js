const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1
console.log(aldeanos[3]);

//4.2

aldeanos.push("Cervasio");
// console.log(aldeanos)

//4.3

aldeanos.splice(0, 1, "Bambina");
console.log(aldeanos)

//4.3

aldeanosreverse = aldeanos.reverse();
console.log(aldeanosreverse)

//4.4

aldeanos.splice(1, 1, "Canela");
console.log(aldeanos);

//4.5

const ultimodato = aldeanos.length - 1;
console.log(aldeanos[ultimodato]);