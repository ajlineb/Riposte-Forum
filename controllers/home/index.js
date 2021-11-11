const router = require('express').Router();
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/allposts', (req, res) => {
  res.render('all-posts');
});
router.get('/post', (req, res) => {
  res.render('posts-comment');
});
router.get('/newpost', (req, res) => {
  res.render('new-post');
});
module.exports = router;
