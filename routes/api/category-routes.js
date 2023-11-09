const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // using find all to get all categories and include the product model
  Category.findAll({  
    include: [Product],
  }).then((categories) => {
    res.status(200).json(categories);
    // error handling
  }).catch((err) => {
    res.status(500).json(err);
  });
});


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // ising the find one to get a single category by its id and include the product model so we can see which products are in each category
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  }).then((category) => { 
    res.status(200).json(category);
  }).catch((err) => {
    res.status(500).json(err);
  });
});


 router.post('/', (req, res) => {
    // create a new category
    // using the create method to create a new category
    Category.create({
      // req body and category name
      category_name: req.body.category_name
    })
      .then((newCategory) => {
        res.status(201).json(newCategory);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  

  router.put('/:id', (req, res) => {
    // update a category by its `id` value
    // using the update method to update a category by its id
    Category.update(
      {
        // req body and category name
        category_name: req.body.category_name,
      },
      {
        // where option to filter by id
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCategory) => {
        res.status(200).json(updatedCategory);
      })
      // error handling
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  

  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value

    // the destroy method to delete a category by its id
    Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    // then method to send the deleted category data back as JSON
      .then((deletedCategory) => {
        res.status(200).json(deletedCategory);
      })
      // error handling
      .catch((err) => {
        res.status(500).json(err);
      });
  });
  
 

module.exports = router;
