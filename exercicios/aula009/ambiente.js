let num = [1, 9, 2, 1]
console.log(`O vetor é: ${num}`)

// num[4] = 9

// console.log(`O vetor é: ${num}`)

// num.push(0)

// console.log(`O vetor é: ${num}`)

// console.log(`O tamanho do vetor é: ${num.length}`)

// console.log(`O vetor é: ${num.sort()}`)

let pos = num.indexOf(1)


if(pos == -1) {
    console.log('O valor não existe dentro da váriavel num')
} else {
    console.log(`O valor está na posição ${pos}`)
}