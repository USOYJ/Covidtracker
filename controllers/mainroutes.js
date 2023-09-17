const router = require('express').Router();

const { Child } = require('../models');


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

// search results route for children by name
router.get('/search/:name', async function (req, res) {
  try {
    const dbChildren = await Child.findAll({
      where: {
        first_name: req.params.name
      }
    });
    const children = dbChildren.map((child) => child.get({ plain: true }));
    res.render('searchResults', {
      layout: 'main',
      loggedIn: req.session.loggedIn,
      children
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/childProfile/:id', async function (req, res) {
  try {
    Child.findOne({
      where: { id: req.params.id }
    }).then(function (dbChild) {
      res.render('childProfile', {
        layout: 'main',
        loggedIn: req.session.loggedIn,
        console: console.log(dbChild),
        child: dbChild.dataValues
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/newChild', async function (req, res) {
  //add new child form
  res.render('newChild', {
    layout: 'main',
    loggedIn: req.session.loggedIn,
    childInfo: req.body,
    dbChild: require('../models/Child')
  });
});

module.exports = router;
