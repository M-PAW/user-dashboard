const sessionModel = require('../models/sessionModel');
const userModel = require('../models/userModel');

const updateSingleUser = ({sessionToken,userData},callback) => {
    const sessionId = sessionToken;
    sessionModel.findOne({sessionId}, (err,session) => {
        if (err || !session) callback(null,false)
        else {
            const _id = session.userId;
            userModel.findOne({_id}, (err,user) => {
                if (err || !user) callback(null,false);
                else {
                    const userUpdate = {
                        username: userData.username || user.username,
                        description: userData.description || user.description,
                        profileImage: userData.profileImage || user.profileImage
                    }
                    console.log(`update Id: ${_id}`);
                    userModel.findOneAndUpdate({_id},userUpdate, (err,success) => {
                        console.log(`updatOne: ${success}`);
                        if (err || !success) {
                            callback(null,false)
                        }
                        else {
                            callback(null,true)
                        }
                    })
                }
            })
        }
    })
}

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = updateSingleUser;