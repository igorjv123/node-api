const users = [
    {
        id: '1',
        name: 'John',
        email: 'as@as.as'
    },
    {
        id: '2',
        name: 'Drake',
        email: 'drake@dr.dr'
    }
]

exports.getAllUsers = function(cb){
    cb(null, users);
}

exports.findUserById = function(id, cb){
    users.forEach(user => {
        if(user.id === id){
            cb(null, user)
            return
        }

    })
}

exports.createUser = function(user, cb){
    users.push(user);
    cb(null, users)
}

exports.changeUser = function(id, newData, cb){
    users.forEach((user, index) => {
        if(user.id == id){
            users[index] = {...newData}
            cb(null, users[index]);
        }
    })
}

exports.deleteUser = function(id, cb){
    console.log(id)
    users.forEach((user, index) => {
        if(user.id == id){
            users.splice(index, 1)
            cb(null, user);
        }
    })
}
