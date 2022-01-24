const router = require('express').Router();
const { User } = require('../../models');

// GET LOGIN PAGE
router.get('/', async (req, res) => {
  // find all users
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    console.log('**********', err);
    res.status(500).json(err);
  }
});

//GET single user
router.get('/:id', async (req, res) => {
  // find one user by its `id` value
  try {
    const userData = await User.findByPk(req.params.id);

    if (!userData) {
      res.status(404).json({ message: 'No Comments with that ID!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    console.log('**********', err);
    res.status(500).json(err);
  }
});

// CREATE new user
router.post('/signup', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      req.session.cookie.maxAge = 900000000;
      console.log(req.session.username);
      console.log(
        '🚀 ~ file: user-routes.js ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = dbUserData.username;
      req.session.cookie.maxAge = 900000000;
      console.log(req.session.username);
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  try {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
  } catch (err) {
    console.log(err);
    res.status(404).end();
  }
});

module.exports = router;
