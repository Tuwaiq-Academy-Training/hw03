
const names = ['Maram','Khaild','Mohammed']
const ages = [25,30,20]
const jobs = ['project manager','engineer','accountent']
const hobbies = ['swimming','chess','eating']
let newarr=[];
let objOfletters={};
for(let i=0;i<3;i++){
//objOfletters[i]=(names[i])+(ages[i])+(jobs[i])+(hobbies[i]);

newarr[i]=[names[i],ages[i],jobs[i],hobbies[i]];
}

console.log(newarr);
