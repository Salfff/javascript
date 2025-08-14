
// let num = [1, 2, 3, 4, 6, 1, 2]

// for(let pos = 0; pos < num.length; pos++) {
//     console.log(`O valor da posição ${pos} do vetor é: ${num[pos]}`)
// }

let num = [1, 2, 3, 4, 6, 1, 2]

for(let pos in num){
    console.log(`O valor da posição ${pos} do vetor é: ${num[pos]}`)
}