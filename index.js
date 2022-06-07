// 1-write a program that counts the number of characters in an input given like the example below:

const counter = s => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})

console.log(
  counter("meshal")
)  
