var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const db = req.app.locals.db;
  db.collection('devcontact').find().toArray((err, contacts) => {

    res.render('index', {
      title: 'Dev Contact',
      info: 'info',
      contacts:contacts

    });
  });
});

module.exports = router;
