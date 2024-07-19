const router = require("express").Router();
const { Car, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all cars

router.get("/", async (req, res) => {
  try {
    const carData = await Car.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const cars = carData.map((car) => car.get({ plain: true }));

    res.render("homepage", {
      cars,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const carData = await Car.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },

        {
          model: Comment,
          include: [User],
        },
      ],
    });

    const car = carData.get({ plain: true });

    console.log(car.image_URL); // Check if the URL is correct

    res.render("cars", {
      ...car,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post to add comment to car post

router.post(`/:id/comments`, withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,

      user_id: req.session.user_id,
    });

    const commentWithUser = await Comment.findByPk(newComment.id, {
      include: [User],
    });

    res.status(200).json(commentWithUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
