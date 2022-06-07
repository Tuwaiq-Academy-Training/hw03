// NOTE: Do Not Hardcode the Answers hint: look up Object methods in javascript.

// const names = ['Maram','Khaild','Mohammed']
// const ages = [25,30,20]
// const jobs = ['project manager','engineer','accountent']
// const hobbies = ['swimming','chess','eating']
//3- given these array change it's structure to allow you to add more information for each user, meaning that we need to have age, job and hobby for each user as follows: maram is 25 years old and is a project manager and loves swimming Khalid is 30 years old and is an engineer and loves chess Mohammed is 20 years old and is an accountent and loves eating

// come up with the structure and code a program to convert these arrays into the structure you came up with.
//ex

const names = ['Maram','Khaild','Mohammed']
const ages = [25,30,20]
const jobs = ['project manager','engineer','accountent']
const hobbies = ['swimming','chess','eating']

let myArays = [
    {name:"Maram", age:25,job:'project manager', hobbies:'swimming'},
    {name:"Khaild", age:30, job:'engineer', hobbies:'chess'},
    {name:'Mohammed', age:20,job:'accountent', hobbies:'eating'}]

function print() {
    for(i in myArays){
      console.log(myArays[i].name + ' is ' + myArays[i].age +'  years and  is  '+myArays[i].job+' and  hobby is loves  '+myArays[i].hobbies); }

    }


print()
