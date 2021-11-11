const router = require('express').Router();
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/posts', (req, res) => {
  res.render('post-comment');

});
module.exports = router;
