const names = ['Maram','Khaild','Mohammed']
const ages = [25,30,20]
const jobs = ['project manager','engineer','accountent']
const hobbies = ['swimming','chess','eating']




//use new array of object :

let users =[


{  names: 'Maram', ages:25,  jobs:'project manager', hobbies:'swimming'},

 { names:'Khaild',ages:30,  jobs:'engineer', hobbies:'chess'},

{  names:'Mohammed',ages:20, jobs:'accountent', hobbies:'eating' }


];

/*let newArray =[... new Map(users.map((item)=>[item["names"], item])).values()];
console.log(newArray);*/
let objectCount = users.length;
for (let j =0 ; j<objectCount; j++){

    console.log(users[j].names+" "+users[j].ages+" "+users[j].jobs+" "+users[j].hobbies);

}

/*for (let i =0 ;i<users.length; i++){
    console.log(users[0].names,users[0].ages,users[0].jobs,users[0].hobbies);
    console.log(users[1].names,users[1].ages,users[1].jobs,users[1].hobbies);
    console.log(users[2].names,users[2].ages,users[2].jobs,users[2].hobbies);*/
//}
//console.log(users.names[0],`is ${ users[0].age} years old`,`and is ${users[0].jobs}`,` and loves ${ users[0].hobbies}`);


//console.log(users[0].names+ users[0].ages+ users[0].jobs+ users[0].hobbies);
/*let users=[
    
    
        {   
            Name:'Maram',
            age:25,
            jobs:'project manager',
            hobbies:'swimming'},
    
        {   
            Name:'Khaild',
            age:30,
            jobs:'engineer',
            hobbies:'chess'},
            
        {   
            Name:'Mohammed',
            age:20,
            jobs:'accountent',
            hobbies:'eating'},
   
];*/


 
//console.log(users.names[0],`is ${ users[0].age} years old`,`and is ${users[0].jobs}`,` and loves ${ users[0].hobbies}`);
//console.log(users.name[1],`is ${ users[1].age} years old`,`and is an ${users[1].jobs}`, ` and loves ${ users[1].hobbies}`);
//console.log(users.name[2],`is  ${ users[2].age} years old`,`and is an ${users[2].jobs}`, ` and loves ${ users[2].hobbies}`);