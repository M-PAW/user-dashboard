const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(14);

// helpers
const registerUser = require('../helpers/registerUser');
const validateUser = require('../helpers/validateUser');
const createSession = require('../helpers/createSession');
const logoutUser = require('../helpers/logoutUser');

const auth = {
    register: (req,res) => {
        const {email,username,password} = req.body;
        if (!email || !username ||!password) {
            res.status(400).send("Incompleted Request");
        }
        else {
            const hash = bcrypt.hashSync(password,salt)
            registerUser(({email,username,hash}), (err, success) => {
                if (!success) {
                    return res.status(500).send({status:'invalid'});
                }
                else {
                    return res.status(201).send({status:'success'});
                }
            })
        }
    },
    login: (req,res) => {
        const {email,password} = req.body;
        if (!email | !password) {
            return res.status(400).send('Incomplete Request');
        }
        else {
            validateUser(({email,password,bcrypt}), (err,success) => {
                if (!success) {
                    return res.status(200).send({status:'incorrect'});
                }
                else {
                    createSession((email), (err,success) => {
                        if (!success) {
                            return res.status(500).send({status:'invalid'})
                        }
                        else {
                            return res.status(200).send({
                                status:"success",
                                sessionToken:success.sessionId,
                                userId:success.userId
                            })
                        }
                    })
                }
            })
        }
    },
    logout: (req,res) => {
        const {sessionToken} = req.body;
        if (!sessionToken) {
            return res.status(401).send('unauthorized')
        }
        else {
            logoutUser((sessionToken), (err,success) => {
                if (!success) {
                    return res.status(500).send({status:'invalid'})
                }
                else {
                    return res.status(200).send({
                        status:'success'
                    })
                }
            })
        }
    }
}

module.exports = auth;