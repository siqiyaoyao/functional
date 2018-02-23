doubleAll = (numbers)=>{
    var result = []
    result = numbers.map((value)=>{
        return value*2
    })
    
    return result;
};

module.exports = doubleAll;