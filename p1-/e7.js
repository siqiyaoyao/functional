var index = 0;
var reduce = (arr,fn,initial)=>{
    /*
    if(arr[index]){
        fn(initial,arr[index],index,arr);
        index++;
        reduce(arr,fn,initial);
        return initial;
    }
    return initial
    */
    ///*
    
    if(!arr.length) return initial;
        
    
    
    var pre = arr[0];
    var cur = arr.slice(1); 
    initial = fn(initial,pre);    
    return reduce(cur,fn,initial)
  // */
   ///*
  
}

module.exports = reduce;