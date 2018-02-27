/*
function add(x,y){
    return x +y ;
}

function partiallyApply(fn,n){
    return (str)=>{
        return fn(10,x)
    }
    
}
console.log(add(10,20));

var addTen = partiallyApply(add,10);
console.log(addTen(20));
*/
var slice = Array.prototype.slice;

function logger(namespace){

  
   return function(){
       console.log(namespace+" "+slice.apply(arguments).join(" "));
   } 
  //  return console.log(namespace.slice(1,-2)); 

}

module.exports = logger;
