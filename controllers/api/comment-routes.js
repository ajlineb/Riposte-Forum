const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  // find all comment
  //TODO:
  try {
    const categroiesData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categroiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one comment by its `id` value
  // be sure to include its associated user and Forums
  //TODO:
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoriesData) {
      res.status(404).json({ message: 'No categories with that ID!' });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new comment
  //TODO:
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a comment by its `id` value
  //TODO:
  Category.update(
    {
      category_name: req.body.category_name,
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
  Category.destroy({
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
