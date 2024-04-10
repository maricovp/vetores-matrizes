/*Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal*/
function verificarSimetria(matriz) {
    if (matriz.length !== matriz[0].length) {
   return false;
    }
    for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < i; j++) {
    if (matriz[i][j] !== matriz[j][i]) {
    return false;
 }
    }
    }
    return true;
}
const matrizSimetrica = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];
const matrizNaoSimetrica = [
     [1, 2, 3],
       [4, 5, 6],
    [7, 8, 9]
];
console.log(verificarSimetria(matrizSimetrica));
console.log(verificarSimetria(matrizNaoSimetrica));
