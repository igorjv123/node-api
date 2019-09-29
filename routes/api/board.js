const boardRouter = require("express").Router();
const Boards = require("../../services/board");

boardRouter.get("/", function(req,res){
    Boards.getAllBoards(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
});

boardRouter.get("/:id", function(req, res){
    Boards.findBoardById(req.params.id, function(err, doc){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
});

boardRouter.post("/", function(req, res){
    Boards.createBoard(req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(board);
    })
});

boardRouter.put("/:id", function(req, res){
    Boards.changeBoard(req.params.id, req.body, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});﻿

boardRouter.delete("/:id", function(req, res){
    Boards.deleteBoard(req.params.id, function(err, result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
});
module.exports = boardRouter;
