# functional 

## Duck type 鸭式辩形
### prototype
作用：可以模拟出类和类的实例化的效果，实例继承类的prototype所有属性，
修改类的prototype属性，实例的下的对应属性也获得改变
```javascript 
    function BaseObject(){ 
        this.oriFun = function(){
            console.log("Ori");
        }
    }
    /* 自定义构造函数创建对象详解
    为BaseObject函数添加一个原型（prototype）属性
    为 prototype对象额外添加一个constructor属性，并保存指向函数BaseObject的一个引用
    
    */

    var inheritObj = new BaseObject;
    /* new 实例化过程详解
    var inheritObj = {}; //创建空对象
    inheritObj.__proto__ = BaseObject.prototype;
    BaseObject.call(inheritObj);// BaseObject函数对象的this指针替换成inheritObj

    在生成实例后，inheritObj继承BaseObject.prototype的所有属性，包括constructor。通过constructor访问它的构造函数
    */
    console.log(inheritObj.constructor === BaseObject ); //true
    console.log(inheritObj.constructor === BaseObject.prototype.constructor ); // true

    BaseObject.prototype.addFun = function(){
        console.log("addFun");
    }

    BaseObject.addOutFun = function(){
        console.log("outFun")
    }

    inheritObj.oriFun();    // Ori
    inheritObj.addFun();    // addFun
    inheritObj.addOutFun(); // err

```


### constructor
每一个js函数（用{}生成）都可以用作构造函数，都自动拥有prototype属性，而该属性的值是一个对象，该对象里有一个constructor属性。可以通过constructor沿着原型链找到最原始的构造函数
作用：一个子类对象可以获得其父类的所有属性和方法，称为继承
```javascript 
    var foo = function(){}// foo.prototype.constructor === foo;
    var p = foo.prototype 
    var c = p.constructor
    console.log(p) // object
    console.log(c) // function 
    console.log(foo === c) // true
    console.log(foo.contructor) // Function构造函数
```
但是constructor易变，因为函数的prototype属性容易被改变，因此我们有时候在构造函数的时候，手动恢复constructor属性
```javascript 
    foo.prototype={
        constructor = foo;
        changeValue:function(){
            console.log("change")
        }
    }
```

### {} 创建，自动继承Object.prototype
```javascript
    var duck ={
        quack:function(){
            console.log('quack')
        }
    }

    duck.hasOwnProperity('quack');//true

    Object.getPrototypeOf(duck) === Object.prototype;//true
    

```
duck没有被赋予hasOwnProperity()的方法，但是却仍然能够执行
因为duck是由{}生成，会自动继承object.prototype的属性

### Object.create(null) 创建，不继承object.prorotype
```javascript
    var duck = Object.create(null)
    duck.quack = function(){
        console.log()
    }

    Object.getPrototypeOf(duck) === Object.prototype;//false
    Object.getPrototypeOf(duck) === null;//true
    duck.hasOwnProperity('quack');//typeError
    console.log(Object.prototype.hasOwnProperty.call(duck,'quack'))//true 用call来将duck做为Object的this使用

```

### call（） &  apply()
巧用.call()方法可以让物件继承不同的类的方法。
call和apply可以动态改变this, 因此可以借助他们来实现物件本身没有的方法，
通过继承其他对象的方法来操作。
当知道参数的明确数量的时候，用call:fun1.call(obj,arg1,arg2)
当不知道参数的具体数量时，用apply:fun1.apply(obj,[arg1,arg2])
经典例子
```javascript
    Array.prototype.slice.call(arguments)
```
