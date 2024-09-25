const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

function averageWord(list) {
  let sumaTotal = 0; 
  for(let i = 0; i < list.length; i++){;
    if(Number.isInteger(list[i])){
        sumaTotal = sumaTotal + list[i];
    }
    else{
        sumaTotal = sumaTotal + list[i].length;
    }
  }
   return sumaTotal/list.length;
}

console.log(averageWord(mixedElements));