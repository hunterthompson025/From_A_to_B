const router = require('express').Router();
const userRoutes = require('./userRoutes');
const carRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/cars', carRoutes);

module.exports = router;