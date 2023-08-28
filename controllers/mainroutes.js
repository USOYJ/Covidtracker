const router = require('express').Router();

const { Child, Schedule } = require('../models');


router.get('/', function (req, res) {
  res.render('signin');
});

router.get('/register', function (req, res) {
  res.render('signup');
});

router.get('/home', async function (req, res) {
  try {
    const dbChildren = await Child.findAll();
    const children = dbChildren.map((child) => child.get({ plain: true }));
    res.render('home', {
      layout: 'main',
      loggedIn: req.session.loggedIn,
      children
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/childprofile/:id', async function (req, res) {
  try {
    Child.findOne({
      where: { id: req.params.id },
      include: [Schedule],
    }).then(function (dbChild) {
      res.render('childprofile', {
        layout: 'main',
        loggedIn: req.session.loggedIn,
        console: console.log(dbChild),
        dbChild, days: dbChild.Schedule
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
