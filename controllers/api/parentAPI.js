const router = require('express').Router();
var db = require('../models');

//get all parents
router.get('/', function (req, res) {
  db.Parent.findAll({
    include: [db.Child],
  }).then(function (dbParent) {
    JSON.stringify(dbParent);
    res.json(dbParent);
  });
});

//get one parent
router.get('/:id', function (req, res) {
  db.Parent.findOne({
    where: { id: req.params.id },
    include: [db.Child],
  }).then(function (dbParent) {
    res.json(dbParent);
  });
});

//register parednt and move on to add kid form
router.post('/', function (req, res) {
  db.Parent.create(req.body).then(function (dbParent) {
    console.log(dbParent);
    res.json(dbParent);
    res.render('newchild', { pid: dbParent.id });
  });
});

router.delete('/:id', function (req, res) {
  db.Parent.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbParent) {
    res.json(dbParent);
  });
});

module.exports = router;
