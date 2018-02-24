var add = (x)=>{
    var sum = 1;
    var tmp = (x)=>{
        sum = sum + x;
        return tmp;
    }
    tmp.toString =()=>{
        return sum;
    }
    return tmp;
}

console.log(add(1));   