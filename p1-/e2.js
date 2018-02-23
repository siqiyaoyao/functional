/*
foo = (fun,num)=>{
    for(let i = 0; i < num; i++){
        fun();
    }
}
*/

// recursion 

foo = (fun, num)=>{
    if(num == 0) return
    fun();
    return foo(fun,--num);// num-- 是左值，计算之前的值， --n是右值，是计算之后的值
}

module.exports = foo;