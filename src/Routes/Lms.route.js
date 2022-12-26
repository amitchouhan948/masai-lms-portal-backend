const express = require("express");
const LmsModel = require("../Models/Lms.model");

const app = express.Router();

app.get("/", async (req, res) => {

try{

  let List = await LmsModel.find();
  
  res.send(List);
}
catch(err){

  res.send(err)
}

});




module.exports = app;
