//random 
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
function randomnumber(){

    var random = getRandomInt(55,88);
    return random;
}


const map ={Milk : 8,
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
    
    function miss(){
        for(let key in map){
            let res=key.length*2;
            map[key]=res;
            if(key.lastIndexOf=="s"){
                res+3;
            }  
            }
            console.log(map);
    }
    miss();
    
