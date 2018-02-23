
checkUsersValid = (goodUsers)=>{
    return (submittedUsers)=>{
        return submittedUsers.every((user)=>{
            return goodUsers.indexOf(user)>= 0;
        })

    }
}

module.exports = checkUsersValid;

