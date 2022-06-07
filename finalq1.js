
let str = word => {
    return word.split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
      },{})
  };
    console.log(str("javascript"));