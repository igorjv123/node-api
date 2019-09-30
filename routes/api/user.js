const userRouter = require("express").Router();
const Users = require("../../services/user");

userRouter.get("/", function(req,res){
  Users.getAllUsers(function(err, docs){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
});

userRouter.get("/:id", function(req, res){
  Users.findUserById(req.params.id, function(err, doc){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    console.log(doc)
    res.send(doc);
  })
});

userRouter.post("/", function(req, res){
  Users.createUser(req.body, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(result);
  })
});

userRouter.put("/:id", function(req, res){
  Users.changeUser(req.params.id, req.body, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
});﻿

userRouter.delete("/:id", function(req, res){
  Users.deleteUser(req.params.id, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
});
module.exports = userRouter;
