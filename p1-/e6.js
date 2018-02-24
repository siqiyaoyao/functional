var countWords = (inputs)=>{
    
  var arr= inputs.reduce((pre,cur)=>{
        pre[cur] ? pre[cur]++ : pre[cur] = 1;       
        return pre;
    },{})
    return arr;
   
}




module.exports = countWords