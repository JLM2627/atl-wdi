//requirements: require mongoose

//const express =('express');
//const router = express.Router();
const mongoose = require('mongoose');


mongoose.promise = global.promise

const Schema = mongoose.Schema;
//create your donut schema:
const DonutSchema = new mongoose.Schema({
    name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});


//export your donut with module.exports()
const DonutModel = mongoose.model('/', DonutSchema )


module.exports = {
    DonutModel: DonutModel
}
