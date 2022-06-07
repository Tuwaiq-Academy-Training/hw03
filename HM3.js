//_________________________________
//Q1
//In this way, the number of letters of the word is printed
/*let char ="someplace over the rainbow"
let numOfChar = char.length;
console.log(numOfChar)*/
//Each letter is written and the number of times it is repeated in this fashion.
/*function count (string) {  
    let count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
  console.log(count('someplace over the rainbow'))*/
//_________________________________
//Q2



  
const items = {
    Milk : 8,
    Papers:17,
    Egg:null,
    Cheese:null,
    Tissues:null,
    Biscuits:null,
    Banana:null,
    water:null,
    Bakery:null,
    Bread:null,
    Meat :null,
    Seafood:null,
    Pasta :null,
    Rice:null,
    Oil:null,
    Sauces:null,
    Salad:null,
    Cereals:null,
    Soups :null,
    Canned_Goods:null,
    Frozen_Foods:null,
    Dairy:null
}




Object.keys(items).map(function(kye,indeix){
let ob = kye;
let obb = ob[ob.length-1];
if(items[kye] == null){
  if(obb == "s" ){
    items[kye] = 3 + kye.length*2
  }else(items[kye] = 3 + kye.length*2)
}
 })
console.log(items)

//_________________________________
//Q3
/*function structure (){
    const arr =[
 names = ['Maram','Khaild','Mohammed'],
 ages = [25,30,20],
 jobs = ['project manager','engineer','accountent'],
 hobbies = ['swimming','chess','eating']
 ]
let [[n1], [a1] , [j1] , [h1]] = arr;
console.log(`${n1} ls ${a1} years old and is a ${j1} and loves ${h1}\n`)
let [[,n2],[,a2],[,j2],[,h2]] = arr
console.log(`${n2} ls ${a2} years old and is an ${j2} and loves ${h2}\n`)
let [[,,n3],[,,a3],[,,j3],[,,h3]] = arr
console.log(`${n3} ls ${a3} years old and is an ${j3} and loves ${h3}\n`)
}
structure ()*/