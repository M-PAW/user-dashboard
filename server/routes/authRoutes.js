const authRoutes = require('express').Router();
const auth = require('../controllers/auth');

authRoutes.post('/register', auth.register);
authRoutes.post('/login',  auth.login);
authRoutes.post('/logout', auth.logout);

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = authRoutes;