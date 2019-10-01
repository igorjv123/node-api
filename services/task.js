exports.getAllTasks = function(cb){
    db.get().collection('tasks').find().toArray((err, docs)=>{
        cb(err, docs);
    });
}

exports.findTaskById = function(id, cb){
    db.get().collection('tasks').findOne({_id: ObjectID(id)}, (err,doc)=>{
        cb(err, doc);
    })
}

exports.createTask = function(message, cb){
    db.get().collection('tasks').insert(message, (err, result)=>{
        cb(err, result);
    });
}

exports.changeTask = function(id, newData, cb){
    db.get().collection('tasks').update(
        { _id: ObjectID(id) },
        { $set: { ...newData }},
        {
            upsert: false,
            multi: false
        },
        (err, result)=>{
            cb(err, result);
        }
    );
}

exports.deleteTask = function(id, cb){
    db.get().collection('tasks').deleteOne(
        { _id: ObjectID(id)},
        (err, result)=>{
            cb(err, result);
        }
    );
}
