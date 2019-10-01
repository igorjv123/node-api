var db = require('../db/db');
const ObjectID = require('mongodb').ObjectID;

exports.getAllLists = function(cb){
    db.get().collection('lists').find().toArray((err, docs)=>{
        cb(err, docs);
    });
}

exports.findListById = function(id, cb){
    db.get().collection('lists').findOne({_id: ObjectID(id)}, (err,doc)=>{
        cb(err, doc);
    })
}

exports.createList = function(list, cb){
    db.get().collection('lists').insert(message, (err, result)=>{
        cb(err, result);
    });
}


exports.changeList = function(id, newData, cb){
    db.get().collection('lists').update(
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

exports.deleteList = function(id, cb){
    db.get().collection('lists').deleteOne(
        { _id: ObjectID(id)},
        (err, result)=>{
            cb(err, result);
        }
    );
}
