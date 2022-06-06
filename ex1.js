
let counter = word => {
  return word.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    },{})
};
  
  console.log(counter("Hello")); 
