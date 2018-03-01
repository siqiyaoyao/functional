/*
module.exports = function arrayMap(arr, fn){
    var result = new Array;
    arr.reduce((pre,cur,index)=>{
        result[index] = fn(cur);
    },0)
    return result;
};
*/

module.exports = function arrayMap(arr,fn,thisArg){
    return arr.reduce(function(acc,item,index,arr){
        acc.push(fn.call(thisArg,item,index,arr))
        return acc;
    },[])
}
// test
//111111