// var readline = require('readline');

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
function jo(){
// readline.question("Enter a input: ", answer => {
//    let letters = answer.split('');
    let letters = "missijjjjjhjbvjhvhvivivssippi".split('');
    let map = {letters};
    let count = 0;
   
    for(let key in map){
        if(map[key] > 1){
            count++;
        }
    }
    console.log(map);

    // console.log(map);
// });
}
jo();
// console.log(letters);
// console.log(map);




