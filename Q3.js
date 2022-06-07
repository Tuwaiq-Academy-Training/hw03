const info = [
    {name:"Maram",age:25,job:'project manager',hobbies:'swimming'},
    {name:"Khaild",age:30,job:'engineer',hobbies:'chess'},
    {name:'Mohammed',age:20,job:'accountent',hobbies:'eating'}
] 
function printinfo() {
    for(i in info ){
      console.log(info[i].name + ' is ' + info[i].age +'  years old and is a '+info[i].job+' and loves '+info[i].hobbies); 
    }
    }
printUser()