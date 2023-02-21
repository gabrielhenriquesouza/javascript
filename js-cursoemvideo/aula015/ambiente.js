let num = [10, 5, 20, 55, 100]
num.push(200)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(``)
for(var c in num){
    console.log(`${num[c]}`)
}
let s = num.indexOf(20)
console.log(`o 20 está na posição ${s}`)