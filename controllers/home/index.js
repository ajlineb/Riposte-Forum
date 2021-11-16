const { User, Forum, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const router = require('express').Router();

//Route used to get all posts
router.get('/all-posts', withAuth, async (req, res) => {
  try {
    const dbPostsData = await Forum.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = dbPostsData.map((post) => post.get({ plain: true }));
    //console.log('*****posts*****', posts);
    console.log(req.session.username, 'is logged in on the homepage!');
    res.render('all-posts', {
      posts, //use this variable for showing all posts
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Getting a single post
router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostsData = await Forum.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_desc',
            'comment_time_stamp',
            'user_id',
            'forum_id',
          ],
          include: [
            {
              model: User,
              attributes: ['id', 'username'],
            },
          ],
        },
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });

    const post = dbPostsData.get({ plain: true });
    //console.log('*****posts*****', post);
    res.render('post-comment', {
      post,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/all-posts');
    return;
  }
  res.render('login');
});
router.get('/register', async (req, res) => {
  res.render('register');
});

router.get('/newpost', withAuth, async (req, res) => {
  try {
    let sessionData = req.session;
    res.render('new-post', {
      sessionData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/session', async (req, res) => {
  try {
    const data = req.session;
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/', (req, res) => {
  const data = req.session;
  res.render('login');
});

module.exports = router;
