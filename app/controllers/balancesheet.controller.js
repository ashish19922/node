const Balance = require('../models/balancesheet.model');

exports.create = (req,res) =>{
   if(!req.body.name){
       return res.status(400).send({
           message: "does not contain balance body"
       });
   }

   const balance = new Balance({
       name: req.body.name,
       balance: req.body.balance
   });

   balance.save()
   .then(data =>{
       res.send(data);
   }).catch(err =>{
       res.status(500).send({
           message: err.message || "something went wrong"
       });
   });
};

exports.findAll = (req,res) =>{

};

exports.findOne = (req,res) =>{

};

exports.update = (req,res) =>{

};

exports.delete = (req,res) =>{

};