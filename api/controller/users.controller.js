const express = require('express');
const Route = express.Router();


Route.get("/all", function(req, res){
  res.send("I m get user call");
});





module.exports = Route;