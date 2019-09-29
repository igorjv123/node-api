const lists = [
    {
        id: 1,
        title: 'My list1',
        order: '....',
    },
    {
        id: 1,
        title: 'My list2',
        order: '....',
    }
]

exports.getAllLists = function(cb){
    cb(null, lists);
}

exports.findListById = function(id, cb){
    lists.forEach(list => {
        if(list.id == id){
            cb(null, list)
        }
    })
}

exports.createList = function(list, cb){
    lists.push(list);
    cb(null, list)
}

exports.changeList = function(id, newData, cb){
    lists.forEach(list => {
        if(list.id == id){
            list = {...newData}
        }
    })
}

exports.deleteList = function(id, cb){
    lists.forEach(list => {
        if(list.id == id){
            const index = lists.indexOf(list)
            lists.splice(index, 1)
        }
    })
}
