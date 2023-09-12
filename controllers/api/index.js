const router = require('express').Router();
const childRoutes = require('./childAPI');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/child', childRoutes);

module.exports = router;