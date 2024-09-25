const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  function repeatCounter(list) {
    let newList = {};
    list.forEach(i => {
        if (newList[i] == undefined || newList[i] == null){
            newList[i] = 1;
        }else{
            newList[i] = newList[i] + 1;
        }    
    });
    return newList;
  }

  console.log(repeatCounter(words));
