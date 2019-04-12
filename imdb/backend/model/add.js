const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddItems = new Schema({

    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    producer: {
        type: String,
        required: true,
    },
    actors : {
        type: String,
        required: true
    }
});


var Item = mongoose.model('AddItems', AddItems);
module.exports = Item;
