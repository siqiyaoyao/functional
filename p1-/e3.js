doubleAll = (numbers)=>{
    var result = []
    result = numbers.map((value)=>{
        return value*2
    })
    
    return result;
};

module.exports = doubleAll;
/*
var arr = [1,2];
var newArr = doubleAll(arr);
console.log(newArr);
*/