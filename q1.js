let objToCompare={}
let repeatedLetter=[];
stmt='Java script';
for(let i = 0; i <= stmt.length; i++) {
    let letter = stmt.charAt(i);
    objToCompare[letter] = (isNaN(objToCompare[letter]) ? 1 : objToCompare[letter] + 1);
}
console.log(objToCompare);


for (let k in objToCompare) {
    if (objToCompare.hasOwnProperty(k) && objToCompare[k]>1) {
        repeatedLetter.push(new Array( objToCompare[k]+ 1 ).join( k ));
    }
}
console.log(repeatedLetter);