const y = ('someplace over the rainbow');
let chars= y.split("");

function countVowel(str) {

    // find the count of vowels
    const count = str.match(/[e]/gi).length;
    return count;
}


const result = countVowel(y);
console.log(chars.join(" "));
console.log( 'is e',result);