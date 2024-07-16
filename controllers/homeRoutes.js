const router = require('express').Router();
const { Car, User } = require('../models');

// Get all cars
router.get('/', async (req,res) => {
    try {
        const carData = await Car.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const cars = carData.map((car) => car.get({ plain: true }));

        res.render('homepage', {
            cars,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

// Get for login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;