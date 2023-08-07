const router = require('express').Router();
var db = require('../models');

router.get('/', function (req, res) {
  res.render('signin');
});

router.get('/register', function (req, res) {
  res.render('signup');
});

router.get('/home', function (req, res) {
  res.render('home', {
    loggedIn: req.session.loggedIn
  });
});


router.get('/genKids', function (req, res) {
  res.render('testdbPostRoutes');
});

router.get('/childprofile/:id', function (req, res) {
  db.Child.findOne({
    where: { id: req.params.id },
    include: [db.Schedule],
  }).then(function (dbChild) {
    res.render('childprofile', {
      child: dbChild, days: dbChild.Schedule
    });
    res.json(dbChild.Schedule);
  });
});

module.exports = router;
