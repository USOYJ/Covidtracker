const router = require('express').Router();
var db = require('../models');

//get all children
router.get('/', function (req, res) {
  db.Child.findAll({
    include: [db.Parent, db.Schedule],
  }).then(function (dbChild) {
    JSON.stringify(dbChild);
    res.json(dbChild);
  });
});

//get child by id
router.get('/:id', function (req, res) {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Child.findAll({
    where: { id: req.params.id },
    include: [db.Parent, db.Schedule],
  }).then(function (dbChild) {
    JSON.stringify(dbChild);
    res.json(dbChild);
  });
});

//add new child form
router.get('/new/:pid', function (req, res) {
  res.render('newchild', { pid: req.params.pid });
});

//add new child
router.post('/', function (req, res) {
  //console.log(req.body);
  db.Child.create(req.body).then(function (dbChild) {
    //console.log(dbChild);
    //res.json(dbChild);
    res.render('schedulechild', {
      childid: dbChild.id,
      pid: req.body.ParentId,
    });
  });
});

router.post('/:id', function (req, res) {
  //console.log(req.body);
  var daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  var daysToUpdate = {};
  for (var i = 0; i < daysOfWeek.length; i++) {
    if (daysOfWeek[i] in req.body && req.body[daysOfWeek[i]] === 'on') {
      daysToUpdate[daysOfWeek[i]] = true;
    } else {
      daysToUpdate[daysOfWeek[i]] = false;
    }
  }
  //res.json(req.body);

  db.Child.update(req.body, { where: { id: req.params.id } }).then(function () {
    db.Schedule.update(daysToUpdate, {
      where: { ChildId: req.params.id },
    }).then(function () {
      res.redirect('/childprofile/' + req.params.id);
    });
  });
});

router.post('/del/:id', function (req, res) {
  db.Child.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function () {
    res.redirect('/');
  });
});

router.delete('/:id', function (req, res) {
  db.Child.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbChild) {
    res.json(dbChild);
  });
});

module.exports = router;
