let ar = [{name:'Milk',Price:8},
              {name:'Papers',Price:17},
              {name:'Egg',Price:null},
              {name:'Cheese',Price:null},
              {name:'Tissues',Price:null},
              {name:'Biscuits',Price:null},
              {name:'Banana',Price:null},
              {name:'water',Price:null},
              {name:'Bakery',Price:null},
              {name:'Bread',Price:null},
              {name:'Meat',Price:null},
              {name:'Seafood',Price:null},
              {name:'Pasta',Price:null},
              {name:'Rice',Price:null},
              {name:'Oil',Price:null},
              {name:'Sauces',Price:null},
              {name:'Salad',Price:null},
              {name:'Cereals',Price:null},
              {name:'Soups',Price:null},
              {name:'Canned_Goods',Price:null},
              {name:'Frozen_Foods',Price:null},
              {name:'Dairy',Price:null}];

              function pr(){
                for(let i=2;i<ar.length;i++){
                   if((ar[i].name)){
                   ar[i].Price = ((ar[i].name).length * 2) +3;
                 }else {
                    ar[i].Price = (ar[i].name).length * 2;
                   }} 
                 for(let x=0;x<ar.length;x++){
                   console.log(ar[x].name + " : " + ar[x].Price);
                     }} pr();