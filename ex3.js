// Crie um algoritmo com dois vetores e os preencha com números inteiros e
// positivos, o usuário deve dizer quando não quer mais inserir valores mas os vetores
// devem ter a mesma quantidade de números. Depois crie um terceiro vetor que irá
// receber apenas os números que estão em ambos os vetores anteriores ou forem
// ímpar.
// Ex.: entrada - arrayA[2,3,4,8,1] arrayB[7,4,1,6,8]
// saída - arrayC[3,4,8,1]

arrayA = []
arrayB = []
index = parseInt(0)
continuar = true

while(continuar == true){
    // arrayA
    num = prompt("Insira um número")
    arrayA[index] = num
    index++
    parar = prompt("Insira 1 para não inserir mais números")
    if(parar == 1){
        continuar = false
    }
}

for (index = 0; index < arrayA.length; index++){
    num = prompt("Insira um número")
    arrayB[index] = num
}

console.log(arrayA)
console.log(arrayB)