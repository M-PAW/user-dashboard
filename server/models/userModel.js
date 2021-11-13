const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id:String,
    username:String,
    description:String,
    profileImage:String
});

const model = mongoose.model('User',schema);

module.exports = model;