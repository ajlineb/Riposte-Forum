const router = require('express').Router();
const { User, Forum, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//Route used to get all posts
router.get('/posts', withAuth, async (req, res) => {
  try {
    const dbPosts = await Forum.findAll({
      include: [
        {
          mode: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = dbPosts.map((post) => post.get({ plain: true }));
    res.render('posts', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  res.render('post');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/register', async (req, res) => {
  res.render('register');
});
module.exports = router;
