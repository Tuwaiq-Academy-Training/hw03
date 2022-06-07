let items=
    {Milk : 8,
        Papers:17,
        Egg:null,
        Cheese:null,
        Tissues:null,
        Biscuits:null,
        Banana:null,
        water:null,
        Bakery:null,
        Bread:null,
        Meat :null,
        Seafood:null,
        Pasta :null,
        Rice:null,
        Oil:null,
        Sauces:null,
        Salad:null,
        Cereals:null,
        Soups :null,
        Canned_Goods:null,
        Frozen_Foods:null,
        Dairy:null}

//create loop contain if stmnt 1)for null items the other for each item name contain (s)at last ,do tme multiplication of 2+add3
 
        for (let key in items ){
            let lastChar=key[key.length-1];

            if(items[key]==null && lastChar!=='s'){
              console.log(`the null items= :,${key} :${key.length*2}`); 
            }else{
              console.log(`the last item =s ${key} :${key.length*2+3}`);

            }
          
 
           }
            
            

            
            
        
