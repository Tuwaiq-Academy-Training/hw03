//excerise
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}

async function start(){
let word=await question('enter word');
let arr=[];
let counter = word.split('');
  for (let i=0; i<counter.length; i++){
    let count=word[i];
    if (!arr[count]){
      arr[count]=0;
    }
  arr[count]++;
  }  
  console.log('the letters count is '+counter.length+' the letters repeated ');
  console.log(' for is each letter :',arr);

  process.exit(0);
}; 
start();
