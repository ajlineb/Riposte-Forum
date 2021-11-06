const router = require('express').Router();
const { Forum, Comment, User } = require('../../models');

router.get('/', async (req, res) => {
  // find all forum posts
  //TODO:
  //console.log('*********HELLO**********');
  try {
    const forumData = await Forum.findAll({
      include: [{ model: Comment }, { model: User }],
    });
    forumData.forEach((data) => {
      data.user.password = null;
    });
    res.status(200).json(forumData);
  } catch (err) {
    console.log('**********', err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one forum post by its `id` value
  // be sure to include its associated comments
  //TODO:
  try {
    const forumData = await Forum.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });

    if (!forumData) {
      res.status(404).json({ message: 'No Posts with that ID!' });
      return;
    }
    forumData.user.password = null;
    res.status(200).json(forumData);
  } catch (err) {
    console.log('**********', err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new forum post
  //TODO:
  try {
    const forumData = await Forum.create(req.body);
    res.status(200).json(forumData);
  } catch (err) {
    console.log('**********', err);
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a forum post by its `id` value
  //TODO:
  Forum.update(
    {
      forum_name: req.body.forum_name,
      forum_text: req.body.forum_text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    //sends the updated Forum post as a json response
    .then((updatedForum) => {
      res.status(200).json(updatedForum);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a Forum post by its `id` value
  //TODO:
  Forum.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedForum) => {
      res.status(200).json(deletedForum);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
