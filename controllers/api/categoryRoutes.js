const router = require('express').Router();
const { Category, Car } = require('../../models');

//proof of concept. once front end is further along I will be able to play around with this to see if this works or not.

// Get all coupes, SUVs or Sedans by filtering by Id
router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Car,
            attributes: ['name'],
          },
        ],
      });

      if (!categoryData) {
        res.status(404).json({ message: 'No category data found with that id!' });
        return;
      }
  //add a switch statement to determine what page to render might also work
   switch (req.params.id) {
    case '1':
        return res.render('/car', {
        cars,
        logged_in: req.session.logged_in });
      case '2':
        return res.render('/SUVs', {
        cars,
        logged_in: req.session.logged_in });;
     case '3':
        return res.render('/trucks', {
        cars,
        logged_in: req.session.logged_in });
    }} catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;