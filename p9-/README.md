# Partial Application 偏函数应用
如果函数有多个参数， 可以通过片函数应用来固定其中几个参数的值。

```javascript
function add(x,y){
    return x +y ;
}

function partiallyApply(fn,n){
    return (x)=>{ //返回function的格式
        return fn(10,x)
    }
    
}

console.log(add(10,20));

var addTen = partiallyApply(add,10);
console.log(addTen(20));
```

### concat()
用于连接两个或多个数组，返回一个新的数组，不会改变现有的数组，仅仅返回被连接组的一个副本。
arr.concat(arr1,arr2...)
