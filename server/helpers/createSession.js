const loginModel = require('../models/loginModel');
const sessionModel = require('../models/sessionModel');
const jwt = require('jsonwebtoken');

const createSession = (email,callback) => {
    const userToken = jwt.sign({email}, process.env.JWT_SECRET);
    loginModel.findOne({email}, (err, loginData) => {
        if (err || !loginData) callback(null,false)
        else {
            const date = Date.now();
            const sessionObject = {
                sessionId: userToken,
                userId: loginData._id,
                created: date
            }
            sessionModel.create(sessionObject, (err,success) => {
                if (err || !success) callback(null,false)
                else {
                    callback(null,{sessionId:success.sessionId,userId:loginData._id})
                }
            })
        }
    })
}

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = createSession;