/*
var BaseObject = function(){
    this.oriFun = function(){
        console.log("Ori");
    }
}
*/
function BaseObject(){ 
    this.oriFun = function(){
        console.log("Ori");
    }
}
var inheritObj = new BaseObject;
BaseObject.prototype.addFun = function(){
    console.log("addFun");
}

BaseObject.addOutFun = function(){
    console.log("outFun")
}
console.log(inheritObj.constructor === BaseObject );
console.log(inheritObj.constructor === BaseObject.prototype.constructor );

inheritObj.oriFun();    // Ori
inheritObj.addFun();    // addFun
//inheritObj.addOutFun(); // err
