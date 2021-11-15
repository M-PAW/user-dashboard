const sessionModel = require('../models/sessionModel');

const hasValidSession = (sessionId,callback) => {
    sessionModel.findOne({sessionId}, (err,success) => {
        if (err,!success) callback(null,false)
        else callback(null,true)
    })
}

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = hasValidSession;