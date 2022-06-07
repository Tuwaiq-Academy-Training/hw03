const names = ['Maram','Khaild','Mohammed']
 const ages = [25,30,20]
 const jobs = ['project manager','engineer','accountent']
 const hobbies = ['swimming','chess','eating']

 const info = [
    {name:"Maram", age:25,job:'project manager', hobbies:'swimming'},
    {name:"Khaild", age:30, job:'engineer', hobbies:'chess'},
    {name:'Mohammed', age:20,job:'accountent', hobbies:'eating'}]

for(let i=0;i<info.length;i++){
console.log(info[i].name + ' is ' + info[i].age + ' years old and is a ' + info[i].job + ' and loves ' + info[i].hobbies);
}