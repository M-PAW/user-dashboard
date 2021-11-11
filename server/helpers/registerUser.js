const loginModel = require('../models/loginModel');
const userModel = require('../models/userModel');

const registerUser = ({email,username,hash},callback) => {
    const loginObject = {
        email:email,
        password:hash
    };

    loginModel.findOne({email}, (err,success) => {
        if (success) callback(err,false)
        else {
            loginModel.create(loginObject, (err,success) => {
                if (err || !success) {
                    callback(null, false)
                }
                else {
                    const userObject = {
                        _id:success._id,
                        username:username,
                        description:'',
                        profileImage:''
                    };
                    userModel.create(userObject, (err, success) => {
                        if (err || !success) {
                            callback(null, false)
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

module.exports = registerUser;