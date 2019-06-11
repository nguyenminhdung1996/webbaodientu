var express = require('express');
var tblbaivietModel = require('../models/tblbaiviet.model');

var router = express.Router();
/*
router.get('/add', (req, res, next) => {
  res.render('tblbaiviet/add');
})

router.post('/add', (req, res, next) => {
  console.log(req.body);
  res.end('done');
})

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  if (isNaN(id)) {
    res.render('tblbaiviet/detail', { error: true });
    return;
  }

  productModel.single(id)
    .then(rows => {
      if (rows.length > 0) {

        var product = rows[0];

        for (var c of res.locals.lcCategories) {
          if (c.CatID === product.CatID) {
            c.active = true;
          }
        }

        res.render('tblbaiviet/detail', {
          error: false, product
        });
      } else {
        res.render('tblbaiviet/detail', {
          error: true
        });
      }
    }).catch(next);
})
*/
module.exports = router;
