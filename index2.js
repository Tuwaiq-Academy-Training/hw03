//2-in the following items there are missing prices, we need to fill each of them, 
  //  each item's price is equal to the number of charactors multiplied by two, if it is more than one then 3 is added to the price

const items = {
    Milk : 8,
    Papers:15,
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


    function tem(){
        
    for(let i in items) {
         if(items[i] == null) {
        
      if(i.includes('s')) {
         items[i]=i.length*2+3;
        }else {
         items[i]=i.length*2
            }  }
        
    console.log(i+ ' '+items[i])
           }
        }
        tem()    
