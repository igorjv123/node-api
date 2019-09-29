const users = [
    {
        id: 1,
        name: 'John',
        email: 'as@as.as'
    },
    {
        id: 2,
        name: 'Drake',
        email: 'drake@dr.dr'
    }
]

exports.getAllUsers = function(cb){
    cb(null, users);
}

exports.findUserById = function(id, cb){
    console.log(id)
    users.forEach(user => {
        if(user.id == id){
            cb(null, user)
            return
        }

    })
}

exports.createUser = function(message, cb){
    comments.push(users);
    cb(null, users)
}

exports.changeUser = function(id, newData, cb){
    users.forEach(user => {
        if(user.id == id){
            user = {...newData}
        }
    })
}

exports.deleteUser = function(id, cb){
    users.forEach(user => {
        if(user.id == id){
            const index = users.indexOf(user)
            users.splice(index, 1)
        }
    })
}