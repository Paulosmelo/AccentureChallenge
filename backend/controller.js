function listener(elem, cont){
  let pos = parseInt(elem);
  cont--;
  let array =  [[], [], ['a','b','c'], ['d','e','f'], ['g','h', 'i'], 
  ['j','k','l'], ['m','n','o'],['p','q','r','s'],
  ['t','u','v'], ['w','x','y','z']];

  return array[pos][cont % array[pos].length];
}

function getFrase(palavra){
  var acumulador = 0
  var posicao = "", aux = "", fraseOut = "";

  var sequence = palavra.split(" ");
  for (let j = 0; j < sequence.length; j++) {
    for (let i = 0; i < sequence[j].length; i++) {
      posicao = sequence[j][i];
      aux = sequence[j][i];
  
      while(posicao === aux){
        aux = sequence[j][i+acumulador];
        acumulador++;
      }
      i = i + acumulador + 1;
      fraseOut += listener(posicao, acumulador-1);
      acumulador = 0;
    }
  
  }
  
  return fraseOut;
}


console.log(getFrase("2 222 222 33 66 8 88 777 33"));

