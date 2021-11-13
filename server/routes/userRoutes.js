const userRoutes = require('express').Router();
const user = require('../controllers/user');

userRoutes.get('/online', (req,res) => res.send('user online'));
userRoutes.get('/users', user.getAll);
userRoutes.get('/user', user.getUser);
userRoutes.put('/update', user.updateUser);

module.exports = userRoutes;