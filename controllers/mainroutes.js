const router = require('express').Router();

const {User, Child, Schedule} = require('../models')


router.get('/', function (req, res) {
  res.render('signin');
});

router.get('/register', function (req, res) {
  res.render('signup');
});

router.get('/home', function (req, res) {
    Schedule.findAll({include: [Child]}).then(function(dbSchedule) {
      const schedules = dbSchedule.map((schedule)=> schedule.get({plain:true}))
      console.log('ran', schedules);
    res.render('home', {
      layout: 'main',
      schedules});
  });
//   res.render('home', {
//     loggedIn: req.session.loggedIn
});
// });


router.get('/genKids', function (req, res) {
  res.render('testdbPostRoutes');
});

router.get('/childprofile/:id', function (req, res) {
    Child.findOne({
    where: { id: req.params.id },
    include: [Schedule],
  }).then(function (dbChild) {
    res.render('childprofile', {
      child: dbChild, days: dbChild.Schedule
    });
    res.json(dbChild.Schedule);
  });
});

module.exports = router;
