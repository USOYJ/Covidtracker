const router = require('express').Router();

const { Child, Schedule } = require('../models');


router.get('/', function (req, res) {
  res.render('signin');
});

router.get('/register', function (req, res) {
  res.render('signup');
});

router.get('/home', function (req, res) {
  Child.findAll({include: [Schedule]}).then(function(dbChildren) {
    const children = dbChildren.map((child)=> child.get({plain:true}));
    //const schedules = dbSchedule.map((schedule)=> schedule.get({plain:true}));
    console.log('ran', children);
    res.render('home', {
      layout: 'main',
      children});
  });

});



router.get('/genKids', function (req, res) {
  res.render('testdbPostRoutes');
});

router.get('/childprofile/:id', async function (req, res) {
  try {
    Child.findOne({
      where: { id: req.params.id },
      include: [Schedule],
    }).then(function (dbChild) {
      res.render('childprofile', {
        layout: 'main',
        console: console.log(dbChild),
        child: dbChild, days: dbChild.Schedule
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//   Child.findOne({
//     where: { id: req.params.id },
//     include: [Schedule],
//   }).then(function (dbChild) {
//     res.render('childprofile', {
//       layout: 'main',
//       console: console.log(dbChild),
//       child: dbChild, days: dbChild.Schedule
//     });
//   });
// });

module.exports = router;
