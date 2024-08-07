const router = require("express").Router();
const { User } = require("../../models");

//Get all users

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post to create user

router.post("/", async (req, res) => {
  console.log("Request Body:", req.body); // Log request body

  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;

      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error("Error:", err); // Log error

    res.status(400).json(err);
  }
});

// Post to login

router.post("/login", async (req, res) => {
  console.log("Request Body:", req.body); // Log request body

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res

        .status(400)

        .json({ message: "Incorrect email or password, please try again" });

      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res

        .status(400)

        .json({ message: "Incorrect email or password, please try again" });

      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;

      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.error("Error:", err); // Log error

    res.status(400).json(err);
  }
});

// Post to logout

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
