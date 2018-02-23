# 函数式编程

## higher order functions 高阶函数
- 可以接受一个或多个函数作为参数
- 返回值为函数

## first-class functions
该类型的值可以作为函数的参数和返回值，也可以付给变量。
js里的function属于该类型

## 复习
### map()
不该变原数组，对数组中的每个元素进行处理，得到新的数组

```javascript
var arr = [1, 2, 3]
var newArr = arr.map((value)=>{
    return value + 1;
})
console.log(newArr)// 2 3 4

```

### filter()
filter把传入的函数一次作用域每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素
```javascript
var arr = [1, 2, 3]
var newArr = arr.filter((value)=>{
    return value > 1;
})
console.log(newArr)// 3 4

```


### some() & every()
数组迭代的方法，every()是对数组中的每一项运行给定函数，如果每一项都返回true，则返回true.some()时任意一项返回true，则true.
```javascript
var arr = [1, 2, 3]
var newArr = arr.every((value)=>{
    return value > 1;
})
console.log(newArr)// false

var newArr2 = arr.some((value)=>{
    return value > 1;
})
console.log(newArr2)// true

```