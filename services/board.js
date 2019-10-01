var db = require('../db/db');
const ObjectID = require('mongodb').ObjectID;

exports.getAllBoards = function(cb){
    db.get().collection('boards').find().toArray((err, docs)=>{
        cb(err, docs);
    });
}

exports.findBoardById = function(id, cb){
    db.get().collection('boards').findOne({_id: ObjectID(id)}, (err,doc)=>{
        cb(err, doc);
    })
}

exports.createBoard = function(board, cb){
    db.get().collection('boards').insert(message, (err, result)=>{
        cb(err, result);
    });
}

exports.changeBoard = function(id, newData, cb){
    db.get().collection('boards').update(
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

exports.deleteBoard = function(id, cb){
    db.get().collection('boards').deleteOne(
        { _id: ObjectID(id)},
        (err, result)=>{
            cb(err, result);
        }
    );
}
