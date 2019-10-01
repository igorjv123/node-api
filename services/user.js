var db = require('../db/db');
const ObjectID = require('mongodb').ObjectID;

exports.getAllUsers = function(cb){
    db.get().collection('users').find().toArray((err, docs)=>{
        cb(err, docs);
    });
}

exports.findUserById = function(id, cb){
    db.get().collection('users').findOne({_id: ObjectID(id)}, (err,doc)=>{
        cb(err, doc);
    })
}

exports.createUser = function(user, cb){
    db.get().collection('users').insert(message, (err, result)=>{
        cb(err, result);
    });
}

exports.changeUser = function(id, newData, cb){
    db.get().collection('users').update(
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

exports.deleteUser = function(id, cb){
    db.get().collection('users').deleteOne(
        { _id: ObjectID(id)},
        (err, result)=>{
            cb(err, result);
        }
    );
}
