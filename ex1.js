const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}

async function senten_ (){
    let sen = await question("enter sentences ?");

await convert_as_array(sen)

process.exit
}
async function convert_as_array(sen){
	const string = sen;
	const usingSpread = [...string];
	await count_letter(usingSpread)
}
async function count_letter(usingSpread){
	let duplication_letter=[]
	for(let i=0;i<usingSpread.length-1;i++){
		let count=0
		// duplication_letter.push(usingSpread[i])	

		for(let j=0;j<usingSpread.length-1;j++){
			if(usingSpread[i]===usingSpread[j]){

				count++
			}
			
		}				
		let uniqe_elm=[...new Set(usingSpread)]
		let filter_elm=uniqe_elm.filter(x => x !== NaN)
		console.log(`this letter  ${filter_elm[i]} duplicated ${count}`)
			// console.log(usingSpread[i]+count)

	}			

}

senten_()