getShortMessages = (mes)=>{
    var results;
    results = mes.map((value)=>{
        shortMes = value.message;
        return shortMes
    }).filter((value)=>{
        return value.length < 50;
    })


    return results;
}

module.exports = getShortMessages;