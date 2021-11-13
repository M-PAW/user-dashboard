const authRoutes = require('express').Router();
const auth = require('../controllers/auth');

authRoutes.post('/register', auth.register);
authRoutes.post('/login',  auth.login);
authRoutes.post('/logout', auth.logout);

module.exports = authRoutes;