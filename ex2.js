const items = {
  Milk: 8,
  Papers: 15,
  Egg: null,
  Cheese: null,
  Tissues: null,
  Biscuits: null,
  Banana: null,
  water: null,
  Bakery: null,
  Bread: null,
  Meat: null,
  Seafood: null,
  Pasta: null,
  Rice: null,
  Oil: null,
  Sauces: null,
  Salad: null,
  Cereals: null,
  Soups: null,
  Canned_Goods: null,
  Frozen_Foods: null,
  Dairy: null,
};

for(let i in items){
     if(i.charAt(items.length - 1)!=='s'){
        items[i] = i.length*2;

    }

     if(i.charAt(items.length - 1)==='s') {
        items[i] = (i.length*2)+3;
    }
}  
console.log(items)