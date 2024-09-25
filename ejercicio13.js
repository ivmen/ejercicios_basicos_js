const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, name) {
    
    if (nameList.includes(name)){
        console.log("true", nameList.indexOf(name));
    }
    else{
        return console.log("false");
    }
  }
  
  nameFinder(names, "Logan")
  