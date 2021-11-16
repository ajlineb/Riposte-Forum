const router = require('express').Router();
const userRoutes = require('./user-routes');
const forumRoutes = require('./forum-routes');
const commentRoutes = require('./comment-routes');
const mailRoutes = require('./send-mail');

router.use('/user', userRoutes);
router.use('/forum', forumRoutes);
router.use('/comments', commentRoutes);
router.use('/email', mailRoutes);

module.exports = router;
