const router = require('express').Router();
var db = require('../../models');

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
router.get('/new', function (req, res) {
  res.render('newchild');
});

//add new child
router.post('/newChild', function (req, res) {
  db.Child.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    parent_email: req.body.parent_email,
    parent_phone: req.body.parent_phone,
  })
    .then(function () {
      //res.json(dbChild);
      res.redirect('/home');
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.post('/:id', function (req, res) {
  db.Child.update(req.body, { where: { id: req.params.id } })
    .then(function (dbChild) {
      res.json(dbChild);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// delete child
router.post('/delete/:id', function (req, res) {
  db.Child.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function () {
    res.redirect('/home');
  });
});

module.exports = router;
