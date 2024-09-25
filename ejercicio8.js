const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.', 'Captain S.'];

function findLongestWord(stringList) {
    let palabraMasLarga = "";
  for (let i = 1; i < stringList.length; i++){
    if (stringList[i].length > stringList[i-1].length){
        palabraMasLarga = stringList[i];
    }
    if (stringList[i].length == stringList[i-1].length){
        palabraMasLarga = stringList[i-1];
    }
  }

  return palabraMasLarga;
}

console.log(findLongestWord(avengers));

