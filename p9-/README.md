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

### bind()
创建一个新函数（绑定函数），返回一个对象的一个方法，并将函数的this指向调用对象，
apply(),call()是立即调用，bing则是返回对应函数，稍后调用
不可连续调用，多次调用bind()无效
```javascript
    function foo(inputs){
        console.log(inputs)
    }

    var bindFun = foo.bind(this,"test");
    bindFun();// test
    bindFun("sddd");// test
    var bindFun2 = foo.bind(this);
    bindFun2("sddd")// sddd

```

### 获取object类型里的键值
动态获取键值的两种方法
```javascript
 var key = "name"; var value  = obj[key];
 var key = "name2"; var value = eval("obj."+key);
 ```