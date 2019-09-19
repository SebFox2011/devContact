var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('/users ok');
});

router.post('/',(req,res)=>{
  const db =req.app.locals.db;
// créer une valeur par défaut :

  //db.collection('devcontact').insertOne(req.body,(err) => res.redirect('/'));
  res.redirect('/');
  console.log(req.body);
});

module.exports = router;
