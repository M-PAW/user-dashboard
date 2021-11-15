const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id:String,
    username:String,
    description:String,
    profileImage:String
});

const model = mongoose.model('User',schema);

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = model;