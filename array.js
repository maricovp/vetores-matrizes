let meuArray = [];

//adicionando elementos no dfinal do array
meuArray.push(10);
meuArray.push(20);
meuArray.push(30);

console.log(meuArray);//saida: [10,20,30]

meuArray.push(40,50,60);

console.log(meuArray);

meuArray[2] = 35;
console.log(meuArray);

let elementoRemovido = meuArray.pop();
console.log(elementoRemovido);
console.log(meuArray);

let tamanhoArray = meuArray.length;

console.log(tamanhoArray);