function countpr(string){
    const histogram = {};
        for (let i=0 ; i< string.length; i++){
        
            const ch=string[i];
        if(!histogram[ch]){
            histogram[ch]=0;
        }
            histogram[ch]++
        }
        return histogram
        }
        console.log(countpr("samplace"));
    
    