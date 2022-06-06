//------------------------ -------------- Home Work 3 

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}

// Exercise 1 : 
async function occuences(){

    let  letterCount=[];
    let sentnce= await question('Please Ente sentence ?');
    let chars= sentnce.split("");
    for(let i=0; i<chars.length;i++){
       let charWord=sentnce[i];
        if(!letterCount[charWord])  {
            letterCount[charWord]=0;
        }
        letterCount[charWord]++;
    }

    for(let j in letterCount ){

        console.log(j + "="+ letterCount[j]);
    }

}
occuences();
//------------------------------------------------------------
// Exercise 2 : 

 
let items= {'Milk' : 8,'Papers':17, 'Egg':null, 'Cheese':null,'Tissues':null,
             'Biscuits':null, 'Banana':null, 'water':null, 'Bakery':null,'Bread':null,
             'Meat' :null, 'Seafood':null,'Pasta' :null, 'Rice':null,'Oil':null,
            'Sauces':null, 'Salad':null,'Cereals':null, 'Soups' :null, 
            'Canned_Goods':null, 'Frozen_Foods':null,'Dairy':null}; 



function printIems(){
    for(let i in items) {
      if(items[i]== null) {

           if(i.includes('_')) {
               i=i.replace('_','');
               items[i]=i.length*2+3; 
             }
            else {
            items[i]=i.length*2
             }
        
      
      }
      
  console.log(i+ ' '+items[i]);
   }
}
printIems(); 

//----------------------------------------------------
// Exercise 3 : 

//const names = ['Maram','Khaild','Mohammed']
//const ages = [25,30,20]
//const jobs = ['project manager','engineer','accountent']
//const hobbies = ['swimming','chess','eating']

const user = [
    {name:"Maram",age:25,job:'project manager',hobbies:'swimming'},
    {name:"Khaild",age:30,job:'engineer',hobbies:'chess'},
    {name:'Mohammed',age:20,job:'accountent',hobbies:'eating'}
] 
function printUser() {
    for(i in user ){
      console.log(user[i].name + ' is ' + user[i].age +'  years old and is a '+user[i].job+' and loves '+user[i].hobbies); 
    }
    }
printUser()
