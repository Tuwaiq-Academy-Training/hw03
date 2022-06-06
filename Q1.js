const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});	
}

removeSpaces = str => str.replace(/\s/g, '');

function letterRepetition(arr, l){
	return arr.includes(l);
}

async function run(){	
let arr=[];
let coun = 0;
let n =0;
let x =0;
let reepetition =[];

let wordLetters = await question('Please, write your sentence: ');
wordLetters = removeSpaces(wordLetters).toLowerCase();
let Letters = Array.from(wordLetters);
for(let i=0;i<Letters.length;i++){
	for(let j=0;j<Letters.length;j++){
		if(Letters[i] == Letters[j]){
           coun++;
        }
	}
     if(! letterRepetition(reepetition, Letters[i])){
	arr[x++] = {letter: Letters[i], repeated: coun};
	reepetition[n++] = Letters[i];}
	coun = 0;
}
for(let i=0;i<arr.length;i++){
	console.log('This letter: ' + arr[i].letter + ' is repeated ' + arr[i].repeated + ' time/s');
    }
readline.close();
}

run();
