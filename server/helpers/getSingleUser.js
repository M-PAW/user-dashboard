const userModel = require('../models/userModel');
const sessionModel = require('../models/sessionModel');

const getSingleUser = (sessionId,callback) => {
    sessionModel.findOne({sessionId}, (err,session) => {
        if (err || !session) callback(null,false);
        else {
            console.log(session.userId);
            userModel.findOne({_id:session.userId}, (err,user) => {
                if (err || !user) callback(null, false);
                else callback(null,user)
            })
        }
    })
}

module.exports = getSingleUser;