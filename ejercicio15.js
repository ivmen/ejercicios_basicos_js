const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

const listCamiseta = [];

for (let i = 0; i < products.length; i++){
    if ( products[i].includes("Camiseta")){
        listCamiseta.push(products[i])
    }    
}
console.log(listCamiseta);