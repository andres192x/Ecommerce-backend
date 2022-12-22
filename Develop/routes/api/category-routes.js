const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    include: [Product]
  }).then(categories => {
    res.json(categories)
  }
);
})

router.get('/:id', (req, res) => {

  Category.findOne( {where:{id: req.params.id}},{
    include: [Product]
  }).then(categories => {
    res.json(categories)
  }
);

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category

  Category.create(req.body)
  .then(categories => {
    res.json(categories)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{where:{id:req.params.id}})
  .then(categories => {
    res.json(categories)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body,{where:{id:req.params.id}})
  .then(categories => {
    res.json(categories)
  })
});

module.exports = router;
