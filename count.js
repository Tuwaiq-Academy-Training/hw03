
const counter = s => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})

console.log(
  counter("Yazeed") 
)  
