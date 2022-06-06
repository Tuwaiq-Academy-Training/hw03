
//Ex2:
let items={
    Milk : 8,
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
let newarr=[];
    //for (const [key, value] of Object.entries(items)) {
        for (let count in items ){
            const last = count.charAt(count.length - 1);
        if(items[count]===null&& last!=='s'){

            console.log(`${count} : ${count.length*2} `)
     
       }
       
       else if(last==='s'){
        console.log(`${count} : ${count.length*2+3} `)
       }
     } 