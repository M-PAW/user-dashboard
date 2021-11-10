const userRoutes = require('express').Router();

userRoutes.get('/online', (req,res) => res.send('user online'));

module.exports = userRoutes;