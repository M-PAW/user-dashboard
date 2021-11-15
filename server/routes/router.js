const router = require('express').Router();

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

module.exports = router;