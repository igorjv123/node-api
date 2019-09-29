const tasks = [
    {
        id: 1,
        title: 'Do...',
        order: '....',
        description: '....',
        assignee: '....'
    },
    {
        id: 1,
        title: 'Do smth',
        order: '....',
        description: '....',
        assignee: '....'
    }
]

exports.getAllTasks = function(cb){
    cb(null, tasks);
}

exports.findTaskById = function(id, cb){
    tasks.forEach(task => {
        if(task.id == id){
            cb(null, task)
        }
    })
}

exports.createTask = function(task, cb){
    tasks.push(task);
    cb(null, task)
}

exports.changeTask = function(id, newData, cb){
    tasks.forEach(task => {
        if(task.id == id){
            task = {...newData}
        }
    })
}

exports.deleteTask = function(id, cb){
    tasks.forEach(task => {
        if(task.id == id){
            const index = tasks.indexOf(task)
            tasks.splice(index, 1)
        }
    })
}
