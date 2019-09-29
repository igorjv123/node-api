const taskRouter = require("express").Router();
const Tasks = require("../../services/task");

taskRouter.get("/", function(req,res){
    Tasks.getAllTasks(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

taskRouter.get("/:id", function(req, res){
    Tasks.findTaskById(req.params.id, function(err, doc){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
});

taskRouter.post("/", function(req, res){
    Tasks.createTask(req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    })
});

taskRouter.put("/:id", function(req, res){
    Tasks.changeTask(req.params.id, req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});﻿

taskRouter.delete("/:id", function(req, res){
    Tasks.deleteTask(req.params.id, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});
module.exports = taskRouter;
