function Spy(target,method){
    var obj = {};
    obj.count = 0;
    var oriMethod = target[method];// 获取目标函数
    target[method] = function(){ //重新定义目标函数
        obj.count++;
        return oriMethod.apply(target,arguments);// == target.method()
    }    
    return obj;
}

module.exports = Spy;