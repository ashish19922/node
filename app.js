var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("dataset");
  dbo.collection("students").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
var server = app.listen(3000, function() {}); 

