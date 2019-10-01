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
            return
        }
    })
}

exports.createList = function(list, cb){
    lists.push(list);
    cb(null, list)
}

exports.changeList = function(id, newData, cb){
    lists.forEach((list, index) => {
        if(list.id == id){
            lists[index] = {...newData}
            cb(null, lists[index]);
            return
        }
    })
}

exports.deleteList = function(id, cb){
    console.log(id)
    lists.forEach((list, index) => {
        if(list.id == id){
            lists.splice(index, 1)
            cb(null, list);
            return
        }
    })
}
