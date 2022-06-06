const x =require("prompt-sync");
const prompt= x ();

// counts the number of characters
   let str =' someplace Over the rainbow'
         let counts = {};
let ch, index, len, count;
// Loop through the string.
for (index = 0, len = str.length; index < len; ++index) {
   // Get this character
   ch = str.charAt(index);

   // Get the count for it

    count = counts[ch];
     // If we have one, store that count plus one
    counts[ch] = count ? count + 1 : 1;
   }

   for (ch in counts) {
      console.log(ch + " there is " + counts[ch]);
  }
  //***************************************************************** */
//se an object and use key 
  let obj = [{food:'Milk',Price:8},
  {food:'Papers',Price:17},
  {food:'Egg',Price:null},
  {food:'Cheese',Price:null},
  {food:'Tissues',Price:null},
  {food:'Biscuits',Price:null},
  {food:'Banana',Price:null},
  {food:'water',Price:null},
  {food:'Bakery',Price:null},
  {food:'Bread',Price:null},
  {food:'Meat',Price:null},
  {food:'Seafood',Price:null},
  {food:'Pasta',Price:null},
  {food:'Rice',Price:null},
  {food:'Oil',Price:null},
  {food:'Sauces',Price:null},
  {food:'Salad',Price:null},
  {food:'Cereals',Price:null},
  {food:'Soups',Price:null},
  {food:'Canned_Goods',Price:null},
  {food:'Frozen_Foods',Price:null},
  {food:'Dairy',Price:null},];


  for(let i=2;i<obj.length;i++){
    if((obj[i].food).includes('_')){
    obj[i].food = obj[i].food.replace('_', '');
    obj[i].Price = ((obj[i].food).length * 2) +3;
    }
   else {
    obj[i].Price = (obj[i].food).length*2;
   }
  } 
  for(let j=0;j<obj.length;j++){
    console.log('item: ' + obj[j].food + ' price: ' + obj[j].Price);
      }
    


//***************************************************************** */
//3-change the array 
let info =[
    {id: 1, Name: 'Maram', Age: 25, Job: 'project manager', Hobby: 'swimming'},
    {id: 1, Name: 'Khaild', Age: 30, Job: 'engineer', Hobby: 'chess'},
    {id: 1, Name: 'Mohammed', Age: 20, Job: 'accountent', Hobby: 'eating'}];
// create foor loop
for(let i=0;i<info.length;i++){
console.log(info[i].Name + ' is ' + info[i].Age + ' years old and is a ' + info[i].Job + ' and loves ' + info[i].Hobby);}
    