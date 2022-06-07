//write a program that counts the number of characters in an input given like the example below:
//input:
//'someplace over the rainbow'
//output:
//'there is 1 of s,m,p,l,c,v,t,h,n,b,w and 2 of a,r and 3 of o and 4 of e



const str = "someplace over the rainbow";

const his = {};


function getStrCounts (str){
    const his = {};

for (let i = 0; i<str.length; i++){

    const ch = str[i];
    if(!his[ch]){
        his[ch]= 0;
    }
    his[ch]++;  
}
return his;
}
console.log(getStrCounts("someplace over the rainbow"));

