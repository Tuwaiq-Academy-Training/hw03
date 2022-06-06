
const names = ['Maram','Khaild','Mohammed']
const ages = [25,30,20]
const jobs = ['project manager','engineer','accountent']
const hobbies = ['swimming','chess','eating']

const newarray = [
    {name:"Maram", age:25,job:'project manager', hobbies:'swimming'},
    {name:"Khaild", age:30, job:'engineer', hobbies:'chess'},
    {name:'Mohammed', age:20,job:'accountent', hobbies:'eating'}]

function newarray2() {
    for(i in newarray){
      console.log(newarray[i].name + ' is ' + newarray[i].age +'  years and she/he is  '+newarray[i].job+' and his/her hobby is '+newarray[i].hobbies); }
      
    }



newarray2()

