
var slice = Array.prototype.slice;
/*
function logger(namespace){

  
   return function(){
       console.log(namespace+" "+slice.apply(arguments).join(" "));
   } 
  //  return console.log(namespace.slice(1,-2)); 

}
*/

function logger(namespace){
    return function(){
        console.log.apply(console,[namespace].concat(slice.call(arguments)))
    }
}
module.exports = logger;
