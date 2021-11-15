
// helpers
const getAllUsers = require('../helpers/getAllUsers');
const hasValidSession = require('../helpers/hasValidSession');
const getSingleUser = require('../helpers/getSingleUser');
const updateSingleUser = require('../helpers/updateSingleUser');
const auth = require('./auth');

const user = {
    getAll: (req,res) => {
        const {authentication} = req.headers;
        let sessionToken = authentication
        if (!sessionToken) {
            return res.status(401).send('unauthorized')
        }
        else {
            hasValidSession((sessionToken), (err,success) => {
                if (!success) {
                    return res.status(401).send('unauthorized');
                }
                else {
                    getAllUsers((err,users) => {
                        if (!users) console.log('User Error, getAll');
                        else {
                            return res.status(200).send({
                                status:"success",
                                users:users
                            });
                        }
                    })
                }
            })
        }
    },
    getUser: (req,res) => {
        const {authentication} = req.headers;
        let sessionToken = authentication
        if (!sessionToken) {
            return res.status(401).send('unauthorized')
        }
        else {
            hasValidSession((sessionToken), (err,success) => {
                if (!success) {
                    return res.status(401).send('unauthorized');
                }
                else {
                    getSingleUser((sessionToken), (err,user) => {
                        if (!user) return res.status(500).send('error');
                        else {
                            return res.status(200).send({
                                status:"success",
                                user:user
                            })
                        }
                    })
                }
            })
        }
    },
    updateUser: (req,res) => {
        const {authentication} = req.body;
        const sessionToken = authentication;
        console.log(req.body);
        const {userData} = req.body
        hasValidSession((sessionToken), (err,success) => {
            if (!success) {
                return res.status(401).send('unauthorized');
            }
            else {
                updateSingleUser(({sessionToken,userData}), (err,userData) => {
                    console.log(userData);
                    if (!userData) {
                        return res.status(500).send('error')
                    }
                    else {
                        getSingleUser((sessionToken), (err,user) => {
                            console.log(`user: ${user}`);
                            if (!user) {
                                return res.status(500).send('error')
                            }
                            else {
                                return res.status(201).send({
                                    status:'success',
                                    user:user
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = user;