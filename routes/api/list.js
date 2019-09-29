const listRouter = require("express").Router();
const Lists = require("../../services/list");

listRouter.get("/", function(req,res){
    Lists.getAllLists(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

listRouter.get("/:id", function(req, res){
    Lists.findListById(req.params.id, function(err, doc){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
});

listRouter.post("/", function(req, res){
    Lists.createList(req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(list);
    })
});

listRouter.put("/:id", function(req, res){
    Lists.changeList(req.params.id, req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});﻿

listRouter.delete("/:id", function(req, res){
    Lists.deleteList(req.params.id, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});
module.exports = listRouter;
