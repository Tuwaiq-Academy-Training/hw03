 //answer 1
 const names = ['Maram','Khaild','Mohammed']
const ages = [25,30,20]
const jobs = ['project manager','engineer','accountent']
const hobbies = ['swimming','chess','eating']
const all=[[names[0],ages[0],jobs[0],hobbies[0]],
[names[1],ages[1],jobs[1],hobbies[1]],
[names[2],ages[2],jobs[2],hobbies[2]]]
console.log(all);
//answer 2
/*
const names =[['Maram','Khaild','Mohammed'],
['project manager','engineer','accountent']
,[25,30,20],
['swimming','chess','eating']]
for (let i of names) {
    for (let j of i) {
      console.log(j[i]);
    }
 }*/
 //  answer 3
 /*
const names = ['Maram','Khaild','Mohammed']
const ages = [25,30,20]
const jobs = ['project manager','engineer','accountent']
const hobbies = ['swimming','chess','eating']
const all=[names,ages,jobs,hobbies ]
// create foor loop
for(let i=0;i<all.length;i++){
console.log(all[i].names + ' is ' + all[i].ages + ' years old and is a ' + all[i].jobs + ' and loves ' + all[i].hobbies);}*/