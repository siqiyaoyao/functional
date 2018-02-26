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
    /*
    
    if(!arr.length) return initial;
    var pre = arr[0];
    var cur = arr.slice(1); //从index=1开始到数组末尾，返回一个新数组，slice()是用新值将删去的内容替换，数组长度不变
    initial = fn(initial,pre);    
    return reduce(cur,fn,initial)
   */
   ///*
    return (function reduceOne(index,value){
        if(index == arr.length  ) return value; // 因为是从序号零开始，当index和长度相等时，所有数据处理完毕，结束递归
        return reduceOne(index+1,fn(value,arr[index],index,arr))
    })(0,initial)



  
}

module.exports = reduce;