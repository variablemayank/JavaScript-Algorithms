const express = require("express");
const mongoose = require('mongoose');
// const db = require('.db/db');
const bodyParser = require('body-parser');
const routes = require('./router')
const app = express();

// Parser incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost:27017/imdb',({useNewUrlParser:true}))
        .then(()=>console.log('connected to mongodb'))
        .catch((err)=>console.log(err))

app.use('/',router)

app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  

var port = process.env.PORT || 5000
        
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
s
