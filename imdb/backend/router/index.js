const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


var Add = require('../model/add');

router.post('/add',(req,res) => {

  var data = {
      name: req.body.name,
      year: req.body.year,
      producer: req.body.producer,
      actors: req.body.actors,   
  }

  Add.findOne({ name:req.body.name,year:req.body.year,producer:req.body.producer,actors:req.body.actors})
  .then(name => {
      if(name){
          return res.status(201).send({"message":"data already exist"})
      } else {
          console.log('save details',data)
          var year = new Add(data)
            year.save()
            .then((save_res)=> {
                if(save_res){
                    Add.find().then(year=> {
                        res.status(200).send({"message":"saved succesfully","year":year})
                    })
                }
                else res.status(500).send({"message":"error while saving"}) 
            }).catch(err => console.log(err))
      }
  })
}) 

module.exports = router
