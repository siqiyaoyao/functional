


function duckCount(){
    
    /*
    var innerArr = arguments;
    return (function Count(arr,index){
        if (index == arr.length) return sum;
        if (Object.prototype.hasOwnProperty.call(arr[index],'quack')) sum++;
        return Count(arr,index+1)
    }(innerArr,0))
    */
    return Array.prototype.slice.call(arguments).filter((obj)=>{
        return Object.prototype.hasOwnProperty.call(obj,'quack')
    }).length;


}

module.exports = duckCount;