
//1.write a program that counts the number of characters 
function getString(string){
    const histogram={};
    for (let i=0 ; i < string.length; i++){
        const ch=string[i];
        if (!histogram[ch]){
            histogram[ch]=0;
        }
        histogram[ch]++;
        }
        return histogram;
}
console.log(getString("somplace over the rainbow"));

// //in the following items there are missing prices, 
const Obj = 

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





    Object.keys(Obj).map(function(key, index) {
        
        if( Obj[key] == null){
            
            Obj[key] = (key.length)*2;
        }
        });
    

         console.log(Obj)

// //given these array change it's structure 
const employee = [
    {name:"Maram", age: 25, jobs:"project manager ", hopy:"swimming"},
    {name:"Khaild", age: 30, jobs:"engineer ", hopy:"chess"},
    {name:"Mohammed", age: 20, jobs:"accountent ", hopy:"eating"},
    
]