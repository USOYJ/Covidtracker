const router = require('express').Router();
var db = require('../models');

router.get('/', function (req, res) {
  res.render('index', {
  });
  /* db.Schedule.findAll({include: [db.Child]}).then(function(dbSchedule) {
    res.render('index', {
      schedules: dbSchedule,
    });
  }); */
});

router.get('/register', function (req, res) {
  res.render('signup', {
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

router.get('/login', function (req, res) {
  res.render('login');
});
module.exports = router;
