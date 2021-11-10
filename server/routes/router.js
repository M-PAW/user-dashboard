const router = require('express').Router();

const loginRoute = require('./loginRoute');
const userRoutes = require('./userRoutes');

router.use('/login', loginRoute);
router.use('/user', userRoutes);

module.exports = router;