const loginModel = require('../models/loginModel');
const sessionModel = require('../models/sessionModel');

const validateUser = ({email,password,bcrypt},callback) => {
    loginModel.findOne({email}, (err,loginData) => {
        if (err || !loginData) callback(null,false)
        else {
            const isValid = bcrypt.compareSync(password, loginData.password);

            if (isValid) callback(null,true);
            else callback (null, false)
        }
    })
}

module.exports = validateUser;