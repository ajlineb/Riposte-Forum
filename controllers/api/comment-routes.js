const router = require('express').Router();
const { Comment, User, Forum } = require('../../models');

router.get('/', async (req, res) => {
  // find all comments
  //TODO:
  try {
    const commentData = await Comment.findAll({
      include: [{ model: Forum }],
    });
    res.status(200).json(commentData);
  } catch (err) {
    console.log('**********', err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one comment by its `id` value
  // be sure to include its associated user and Forums
  //TODO:
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [{ model: Forum }, { model: User }],
    });

    if (!commentData) {
      res.status(404).json({ message: 'No Comments with that ID!' });
      return;
    }

    commentData.user.password = null;
    res.status(200).json(commentData);
  } catch (err) {
    console.log('**********', err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new comment
  //TODO:
  try {
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    console.log('**********', err);
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a comment by its `id` value
  //TODO:
  Comment.update(
    {
      comment_desc: req.body.comment_desc,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    //sends the updated comment as a json response
    .then((updatedCategory) => {
      res.status(200).json(updatedCategory);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a comment by its `id` value
  //TODO:
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.status(200).json(deletedCategory);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
