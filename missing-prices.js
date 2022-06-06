const Obj = {
    Milk: 8,
    Papers: 17,
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
  }
  
  Object.keys(Obj).map(function (key, index) {
    let keyVariable = key
    let last = keyVariable[keyVariable.length - 1]
    if (Obj[key] == null) {
      if (last == "s") {
        Obj[key] = 3 + key.length * 2
      } else {
        Obj[key] = key.length * 2
      }
    }
  
  })
  
  console.log(Obj)