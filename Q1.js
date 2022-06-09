const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    readline.question(query, resolve);
  });
}

function printNumbers(object) {
  const entries = Object.entries(object);
  entries.sort((a, b) => a[1] - b[1]);
  const printOrder = {1:'',2:'',3:'',4:'',5:'',6:''}
  for (const number of entries) {
      printOrder[number[1]] = printOrder[number[1]]+number[0]+','
  }
  console.log(`there is${printOrder[1]!=''? ' 1 of '+ printOrder[1]:''} ${printOrder[2]!=''? 'and 2 of '+ printOrder[2]:''} ${printOrder[3]!=''?'and 3 of '+ printOrder[3]:''} ${printOrder[4]!=''?'and 4 of '+ printOrder[4]:''} ${printOrder[5]!=''?'and 5 of '+ printOrder[5]:''} ${printOrder[6]!=''?'and 6 of '+ printOrder[6]:''}`);
}

function splitChars(sentence) {
  const chars = sentence.join("").split("");
  let objectOfChars = {};
  chars.map((item) => {
    objectOfChars[item] =
      objectOfChars[item] == undefined ? 1 : objectOfChars[item] + 1;
  });
  return objectOfChars;
}

async function main() {
  // this while loop will work with the input and
  //ask the user till he/she writes exit
  while (true) {
    // you can use as many of these as you want
    const name = await question(
      "Write something to find the number of characters? or exit to close the program \n"
    );
    if (name == "exit") {
      break; // or process.exit(1)
    }
    //your code goes here
    const object = splitChars(name.split(" "));
    printNumbers(object);
  }
  readline.close();
}

main();
