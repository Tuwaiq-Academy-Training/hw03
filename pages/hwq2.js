

let str =
{Milk : 8,
    Papers:17,
    Egg:null,
    Cheese:null,
    Tissues:null,
    Biscuits:null,
    Banana:null,
    water:null,// 5*2= 10
    Bakery:null,// 6*2 =12
    Bread:null, // 5 *2 =10
    Meat :null,  //4 *2 =8
    Seafood:null,
    Pasta :null,
    Rice:null,
    Oil:null,
    Sauces:null,
    Salad:null,
    Cereals:null,
    Soups :null, // 5*2 =10 
    Canned_Goods:null,
    Frozen_Foods:null,
    Dairy:null}; //5*10 = 10


    
     for(let i in str){
         let st =i[i.length-1];
        
    if (str[i]===null&& st!=='s'){

       console.log(`${i} : ${i.length*2}`)}
    else if(st==='s') {
        console.log(`${i} : ${i.length*2+3}`)}
    }

            /*if(('s'))
                
                str[i]=i.length*2+3;
            
            else
                str[i]=i.length*2;
            


            
        
        }  
        
        console.log(i+' '+str[i]);
        }


    }
  
     printStr();
*/
