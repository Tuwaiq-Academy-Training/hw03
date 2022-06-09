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

for (const item in items) {
        items[item] = item.length*2;
        items[item] = item[item.length-1]=='s'?items[item]+3 :items[item]
}
console.log(items)