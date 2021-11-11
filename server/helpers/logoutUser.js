const sessionModel = require('../models/sessionModel');

const logoutUser = (sessionId,callback) => {
    sessionModel.findOneAndDelete({sessionId}, (err,success) => {
        if (err || !success) callback(null,false);
        else {
            callback(null,true)
        }
    })
}

module.exports = logoutUser;