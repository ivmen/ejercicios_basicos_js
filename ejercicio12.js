const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(list) {
    for (let i = 0; i < list.length; i++){
        const elementoLista = list[i];
        
        for (let j = i + 1; j < list.length; j++){
            const otroElemento = list[j];

            if(elementoLista === otroElemento){
                list.splice(j, 1);
            }
        }
    }
    return list;
  }

  console.log(removeDuplicates(duplicates));