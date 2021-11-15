const mongoose = require('mongoose');

const schema = mongoose.Schema({
    sessionId:String,
    userId:String,
    created:Date
})

const model = mongoose.model('Session', schema)

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = model;