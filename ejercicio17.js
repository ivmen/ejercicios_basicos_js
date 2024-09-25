const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

const alienKeys = Object.keys(alien);

for (let i = 0; i < alienKeys.length; i++){
    const key = alienKeys[i];
    console.log("La propiedad " + alienKeys[i] + " tiene como valor: " + alien[key]);
}