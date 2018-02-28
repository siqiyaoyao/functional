var slice = Array.prototype.slice;

module.exports = function(namespace){
    ///*
    return function(){
    var sliceFun = slice.bind(arguments)();
      var finalData= [namespace].concat(sliceFun).join(" ")
      console.log(finalData);
    }
    //*/
    //return console.log.bind(console,namespace)
}