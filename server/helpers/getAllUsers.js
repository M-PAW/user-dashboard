const userModel = require('../models/userModel');

const getAllUsers = (callback) => {
    userModel.find(({}), (err, users )=> {
        if (err || !users) {
            callback(null,false)
        }
        else {
            callback(null,users)
        }
    })
}

module.exports = getAllUsers;