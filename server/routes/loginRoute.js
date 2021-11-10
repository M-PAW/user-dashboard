const loginRoute = require('express').Router();

loginRoute.get('/online', (req,res) =>  res.send('Login Online'))

module.exports = loginRoute;