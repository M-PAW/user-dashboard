const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email:String,
    password:String,
});

const model = mongoose.model('Login', schema)

module.exports = model;