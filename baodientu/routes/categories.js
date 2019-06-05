var express = require('express');
var router = express.Router();
var categoryModel = require('../models/category.model');


router.get('/',(req,res,next) => {
    categoryModel.all()
        .then(rows =>{ 
            res.render('categories/index', {
                categories:rows
            });
        }).catch(next);
})

router.get('/add', (req, res, next) => {
    res.render('Categories/add');
  })

  router.post('/add', (req, res, next) => {
    categoryModel.add(req.body).then(id => {
      res.render('Categories/add');
    }).catch(next);
  })

  router.get('/edit/:id', (req, res, next) => {
    var id = req.params.id;
    if (isNaN(id)) {
      res.render('Categories/edit', { error: true });
      return;
    }
  
    categoryModel.single(id)
      .then(rows => {
        if (rows.length > 0) {
          res.render('Categories/edit', {
            error: false,
            category: rows[0]
          });
        } else {
          res.render('Categories/edit', {
            error: true
          });
        }
      }).catch(next);
  })

  router.post('/update', (req, res, next) => {
    categoryModel.update(req.body).then(n => {
      res.redirect('/categories');
    }).catch(next);
  })
  
  router.post('/delete', (req, res, next) => {
    categoryModel.delete(+req.body.CatID).then(n => {
      res.redirect('/categories');
    }).catch(next);
  })


// router.get('/add',(req,res) => {
//      res.end('category');
//   })

    // router.get('/add',(req,res) => {
    //     res.render('categories/add');
    // })

    // router.post('/add',(req,res) => {
    //     // console.log(req.body);
    //     // var entity = {CatName: req.body.CatName};
    //     categoryModel.add(req.body).then(id =>{
    //         // console.log(id);
    //         res.render('categories/add');
    //     });   
        
    // })

// router.get('/edit/:id',(req,res) => {
//     var id =req.params.id;
//     if(isNaN(id)){
//         res.render('categories/edit',{error:true});
//         return;
//     }
//     categoryModel.single(id)
//     .then(rows => {
//         if(rows.length >0){
//             res.render('categories/edit', {
//                 error:false,
//                 category: rows[0]
//             });
//         }else{
//             res.render('categories/edit',{
//                 error:true
//             });
//         }
//     });
// })

// router.post('/update',(req,res) => {
//     // console.log(req.body);
//     // var entity = {CatName: req.body.CatName};
//     categoryModel.update(req.body).then(n => {
//         res.redirect('/categories');
//     });   
// })


module.exports =  router;



